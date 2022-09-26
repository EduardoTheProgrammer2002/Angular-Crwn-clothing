import { Component, OnInit } from '@angular/core';
import { IToken } from './interfaces/Iauth';
import { AuthService } from './services/authServices/auth.service';
import { CartService } from './services/cartService/cart.service';
import { ItemService } from './services/itemService/item.service';
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
    public storage: StorageService,
    private item: ItemService,
    public cart: CartService
    ) {}

  refreshToken: (string | null) = this.storage.getToken('refreshToken');
    
  ngOnInit(): void {
    this.refreshAuth();
    
    this.storage.authState$.subscribe(state => {
      //if state changes to false, remove items and remove tokens
      if (!state) {
        this.storage.removeTokens();
        this.storage.removeItems();
        return;
      }
      //otherwise do something else
      return;
    })
  }
  


  refreshAuth() {
    if(!this.refreshToken) {
      console.log('No user logged in');
      this.storage.storeAuthState(false);
      return;
    }

    this.auth.refreshAuth(this.refreshToken).subscribe(val => {
      const response:any = val;

      if (!response.ok) {
        this.storage.storeAuthState(false);
        console.log('No user logged in');
        return;
      }

      //storing the refreshed tokens
      const tokens:IToken = response.tokens;
      this.storage.storeTokens(tokens);
      this.storage.authState$.next(true);
      this.setItems(tokens.accessToken)
    });
  }

  setItems(token: (string | null)) {
    this.item.setLocalItems(token);
  }
  
}
