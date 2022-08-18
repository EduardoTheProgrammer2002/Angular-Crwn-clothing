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

  //this makes a request to obtaine the items of a user
  getItems(token: string) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Access ${token}`
    });

    const requestOptions = {headers: headers};

    return this.http.get(`${this.apiUrl}/api/getItems`, requestOptions);
  }

  //set locals items by obtaining the items from the backend
  setLocalItems(token: (string | null)) {
    //if token is null, do not make the request.
    if (!token) {
      //remove the items and itemsQuantity
      this.storage.removeItems();
      return;
    }

    //make the request to obtain the items from the backend
    return this.getItems(token).subscribe(res => {
      const response: any = res;
      const {items, error, itemsQuantity} = response;

      //verifying if there is an error.
      if (error) {
        console.error(error);
        this.storage.removeItems();
        return;
      }

      this.storage.storeItems(items);
      this.storage.setQuantity(itemsQuantity);
      return;
    });
  }
}
