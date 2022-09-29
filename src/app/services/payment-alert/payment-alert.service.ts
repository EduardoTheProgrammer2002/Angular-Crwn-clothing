import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentAlertService {
  show = false; //visibility property
  state = true; //request state, false = failure, true = success
  msg = 'Congratulations!'; //message to let the user know how the things went
  headerMsg = 'Congratulations!';

  constructor() { }

  //req functionability
  failedPayment(): void {
    this.state = false;
  }

  successPayment(): void {
    this.state = true;
  }

  //show or visibility functionability
  updateShowProp(show: boolean): void {
    this.show = show;
  }

  //message functionability
  updateMsg(msg: string, header: string): void {
    this.msg = msg;
    this.headerMsg = header;
  }

}
