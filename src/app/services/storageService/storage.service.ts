import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAuthUser } from 'src/app/interfaces/Iauth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  token: Subject<(string | null)> = new BehaviorSubject<(string | null)>(this.getToken());
  authState: Subject<boolean> = new BehaviorSubject<boolean>(this.getAuthState());
  user: Subject<(null | IAuthUser)> = new BehaviorSubject<(null | IAuthUser)>(null);

  constructor() { }

  setUser(user: (IAuthUser | null)) {
    this.user.next(user);
  }

  storageToken(token: string) {
    localStorage.setItem('token', token);
    this.token.next(token);
  }

  removeToken():void {
    if(!localStorage.getItem('token')) {
      return;
    }
    localStorage.removeItem('token');
  }

  getToken() {
    const token: (string | null) = localStorage.getItem('token'); 
    return token;
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
