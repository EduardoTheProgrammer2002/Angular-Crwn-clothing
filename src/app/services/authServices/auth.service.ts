import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  signOut() {
    return this.http.delete(`${this.apiUrl}/api/auth/signout`);
  }

  getAuthUser(token: string) {
    //define the header with the token
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Access ${token}`
    });

    const requestOptions = {headers: headers};

    return this.http.get(`${this.apiUrl}/api/user`, requestOptions);
  }

  refreshAuth(token:string) {
        //define the header with the token
        const headers: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Refresh ${token}`
        });
    
        const requestOptions = {headers: headers};
        return this.http.get(`${this.apiUrl}/api/auth/refresh`, requestOptions);
  }
}
