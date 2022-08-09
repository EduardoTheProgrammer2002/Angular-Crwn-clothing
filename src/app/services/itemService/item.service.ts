import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { IITemToStore } from 'src/app/interfaces/Iitems';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storageService/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl: string = environment.apiUrl;
  token: string = '';

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }


  //this makes a request to the endpoint to store the items selected by the user
  storeItem(Item: IITemToStore, token: string) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Access ${token}`
    });

    const requestOptions = {headers: headers};

    return this.http.post(`${this.apiUrl}/api/storeItem`, Item, requestOptions);
  }
}
