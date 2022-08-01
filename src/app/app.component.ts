import { Component, OnInit } from '@angular/core';
import { IToken } from './interfaces/Iauth';
import { AuthService } from './services/authServices/auth.service';
import { ShopService } from './services/shop.service';
import { StorageService } from './services/storageService/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    public data: ShopService,
    private auth: AuthService,
    private storage: StorageService
    ) {}

  refreshToken: (string | null) = this.storage.getToken('refreshToken');
    
  ngOnInit(): void {
    if(!this.refreshToken) {
      console.log('No user logged in');
      this.storage.storeAuthState(false);
      return;
    }

    this.auth.refreshAuth(this.refreshToken).subscribe(val => {
      const response:any = val;

      if (!response.ok) {
        this.storage.removeTokens();
        this.storage.storeAuthState(false);
        console.log('No user logged in');
        return;
      }
      //storing the refreshed tokens
      const tokens:IToken = response.tokens;
      this.storage.storeTokens(tokens);

      //accessing the token
      this.storage.token.subscribe(token => {
        if(!token) {
          return;
        }
        //get the user if the token is not out of date.
        this.auth.getAuthUser(token).subscribe(res => {
          const response:any = res;
  
          //request failed
          if (!response.ok) {
            //set AuthState to false and the user to null
            this.storage.storeAuthState(false);
            this.storage.setUser(null);
            this.storage.removeTokens();
            return;
          }
  
          //set the authState to true and the user to the user got from the request.
          this.storage.storeAuthState(true);
          this.storage.setUser(response.user);
        });
      });

    });

    
  }
  
}
