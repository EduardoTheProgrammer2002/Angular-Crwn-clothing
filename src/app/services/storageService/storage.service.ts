import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAuthUser, IToken } from 'src/app/interfaces/Iauth';
import { IItem } from 'src/app/interfaces/Iitems';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  token = this.getToken('accessToken');
  authState$: Subject<boolean> = new BehaviorSubject<boolean>(this.getAuthState());
  user$: Subject<(null | IAuthUser)> = new BehaviorSubject<(null | IAuthUser)>(null);
  items$: Subject<(null | IItem[])> = new BehaviorSubject<(null | IItem[])>(this.getItems());
  itemsQuantity: number = 0;

  constructor() { }

  
  //items quantity functionality
  setQuantity(quantity:number) {
    this.itemsQuantity = quantity;
  } 

  // increasement and decreasement
  increaseQuantity(amount?: number) {
    amount = amount?? 1;
    this.itemsQuantity += amount;
  } 

  decreaseQuantity(amount?: number) {
    amount = amount?? 1;
    this.itemsQuantity -= amount;
  }

  //store items in local storage
  storeItems(items: IItem[]) {
    this.items$.next(items);
    
    if(!items) {
      this.removeItems();
      return;
    }
    localStorage.setItem('items', JSON.stringify(items));
  }

  //remove items from local storage
  removeItems() {
    this.items$.next(null);
    this.setQuantity(0);
    localStorage.removeItem('items');
  }

  //get items from local storage
  getItems(): (null | IItem[]) {
    const items = localStorage.getItem('items'); 
    if (!items) {
      return null
    }
    return JSON.parse(items);
  }

  //add an Item to the items property in local storage 
  addItem(item:IItem) {
    let items = this.getItems();
    //increase the total quantity
    this.increaseQuantity(); 
    
    //if items is null that means the user hasn't added any item to cart and wants to add an item, so we store it in local storage.
    if (!items) {
      this.storeItems([item]);
      return;
    }

    const itemIn = items.find(i => i.description === item.description);

    //if the item doesn't exist in the items array we need to add it
    if(!itemIn) {
      items.push(item);
      this.storeItems(items);
      return;
    }

    //if the item exists in the items array, we just increase the quantity
    items = items.map(i => {
      if (i.description === item.description) {
        const newQuantity = Number(i.quantity) + 1;
        i.quantity = JSON.stringify(newQuantity);
        return i;
      }
      return i;
    });
    this.storeItems(items);
    return;
  }

  //this set the user variable
  setUser(user: (IAuthUser | null)) {
    this.user$.next(user);
  }

  //functionability to store, remove, get the tokens from local storage and update the local variable
  storeTokens(tokens: IToken) {
    const {accessToken, refreshToken} = tokens;
    //storing the tokens
    localStorage.setItem('tokens', JSON.stringify(tokens));
    this.token = accessToken;
  }

  removeTokens():void {
    localStorage.removeItem('tokens');
    this.token = null;
  }

  getToken(tokenName: string): (string | null) {
    const nonParsed = localStorage.getItem('tokens');
    const tokens = nonParsed && JSON.parse(nonParsed);
    if (!tokens) {
      return null;
    }

    return tokens[tokenName];
  }

  //functionability to store the auth state in the local storage and update the local variable
  storeAuthState(value:boolean): void {
    const authState = value ? 'true': 'false';
    localStorage.setItem('authState', authState);
    this.authState$.next(value);
  }

  getAuthState() {
    const authState: (string | null) = localStorage.getItem('authState');
    if(!authState || authState === 'false') {
      return false
    }
    return true;
  }
}
