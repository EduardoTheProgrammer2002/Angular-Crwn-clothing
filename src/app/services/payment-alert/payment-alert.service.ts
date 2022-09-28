import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentAlertService {
  show: Subject<boolean> = new BehaviorSubject<boolean>(false); //visibility property
  reqState: Subject<boolean> = new BehaviorSubject<boolean>(true); //request state, false = failure, true = success
  msg: Subject<string> = new BehaviorSubject<string>(''); //message to let the user know how the things went

  constructor() { }

  //req functionability
  failedRequest(): void {
    this.reqState.next(false);
  }

  successRequest(): void {
    this.reqState.next(true);
  }

  //show or visibility functionability
  updateShowProp(vis: boolean): void {
    this.show.next(vis);
  }

  //message functionability
  updateMsg(str: string): void {
    this.msg.next(str);
  }
}
