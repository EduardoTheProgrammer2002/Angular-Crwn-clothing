import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAuthUser, IToken } from 'src/app/interfaces/Iauth';
import { IItem } from 'src/app/interfaces/Iitems';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  token: Subject<(string | null)> = new BehaviorSubject<(string | null)>(this.getToken('accessToken'));
  authState: Subject<boolean> = new BehaviorSubject<boolean>(this.getAuthState());
  user: Subject<(null | IAuthUser)> = new BehaviorSubject<(null | IAuthUser)>(null);
  items: Subject<(null | IItem[])> = new BehaviorSubject<(null | IItem[])>(null);

  constructor() { }

  setItems(items: (IItem[] | null)) {
    this.items.next(items);
  }

  setUser(user: (IAuthUser | null)) {
    this.user.next(user);
  }

  storeTokens(tokens: IToken) {
    const {accessToken, refreshToken} = tokens;
    //storing the tokens
    localStorage.setItem('tokens', JSON.stringify(tokens));
    
    this.token.next(accessToken);
  }

  removeTokens():void {
    localStorage.removeItem('tokens');
    this.token.next(null);
  }

  getToken(tokenName: string): (string | null) {
    const nonParsed = localStorage.getItem('tokens');
    const tokens = nonParsed && JSON.parse(nonParsed);
    if (!tokens) {
      return null;
    }

    return tokens[tokenName];
  }

  storeAuthState(value:boolean): void {
    const authState = value ? 'true': 'false';
    localStorage.setItem('authState', authState);
    this.authState.next(value);
  }

  getAuthState() {
    const authState: (string | null) = localStorage.getItem('authState');
    if(!authState || authState === 'false') {
      return false
    }
    return true;
  }
}
