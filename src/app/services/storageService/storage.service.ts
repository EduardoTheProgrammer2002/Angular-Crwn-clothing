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
  totalToPay: number = this.getTotalToPay();

  constructor() { }

  setTotalToPay() {
    this.totalToPay = this.getTotalToPay();
  }

  getTotalToPay() {
    let total = 0;
    this.items$.subscribe((items) => {
      if(!items) {
        return
      } 

      items.map((item) => {
        total += Number(item.quantity)*Number(item.price);
      })
    })
    return total
  }

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

  //this updates a single item quantity by specifying the quantity and the item to be modified
  updateItemQuantity(quantity: Number, item: IItem) {
    let items = this.getItems();
     //this is the variable that will contain the value to be added or substracted to the total items quantity
    let amountUpdate:number = quantity > Number(item.quantity) ? Number(quantity) - Number(item.quantity) : Number(item.quantity) - Number(quantity) ; 

    //make sure if the items variable is not null
    if (!items) {
      return;
    }

    
    //updating the item quantity
    items = items?.map((i) => {
      if(i.description === item.description) {
        i.quantity = JSON.stringify(quantity)
        return i;
      }
      return i;
    });
    
    //updating the total items quantity
    if (quantity > Number(item.quantity)) {
      this.increaseQuantity(amountUpdate);
    } else {
      this.decreaseQuantity(amountUpdate);  
    }

    //storing the items
    this.storeItems(items);
  }

  //this Makes an operation on an item quantity, the operation could be an INCREASE(adding) or DECREASE(substraction) operation and
  //Updates all the variables needed to update the frontend
  OperateOnItemQuantity(operation: string, item: IItem) {
    let items = this.getItems();

    //make sure if the items variable is not null
    if (!items) {
      return;
    }
    
    //updating the item quantity
    items = items?.map((i) => {
      if(i.description === item.description) {
        i.quantity = JSON.stringify(Number(i.quantity) + (operation === 'increase' ? 1 : -1));
        return i;
      }
      return i;
    });
    
    //updating the total items quantity
    if (operation === 'increase') {
      this.increaseQuantity();
    }
    this.decreaseQuantity();

    //storing the items
    this.storeItems(items);
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

  //this remove all the quantity of a single product from the local storage
  removeItem(item: IItem) {
    //get the items from local storage
    let items = this.getItems();

    //verify that the itmes exist, this is gonna always be false, but it's always good to check
    if (!items) {
      console.log('Items not found');
      return;
    }

    //removing the item form items
    items = items.filter((i) => i.description != item.description);
    this.storeItems(items); //store the new item's list
    this.items$.next(items); //send it to the items observable
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
