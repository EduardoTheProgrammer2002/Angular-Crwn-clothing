import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Iuser from 'src/app/interfaces/Iauth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  signIn(user: Iuser) {
    return this.http.post(`${this.apiUrl}/api/auth/signin`, user);
  }

  signUp(user: Iuser) {
    return this.http.post(`${this.apiUrl}/api/auth/signup`, user);
  }

}
