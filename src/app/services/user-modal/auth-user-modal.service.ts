import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserModalService {
  show: boolean = false

  constructor() { }


  toggleModal() {
    this.show = !this.show;
  }

  updateShowProp(val: boolean) {
    this.show = val
  }
}
