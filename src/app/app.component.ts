import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.storage.token.subscribe(token => {
      if(!token) {
        console.log('No user logged in');
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
      })
    })
    
  }
  
}
