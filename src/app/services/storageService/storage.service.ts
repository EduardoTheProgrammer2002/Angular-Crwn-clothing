import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  token: (string | null) = this.getToken();
  // authState: boolean = this.getAuthState();

  constructor() { }

  storageToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  getToken() {
    const token: (string | null) = localStorage.getItem('token'); 
    return token;
  }

  // getAuthState() {
  //   return false;
  // }
}
