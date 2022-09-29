import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCheck, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PaymentAlertService } from 'src/app/services/payment-alert/payment-alert.service';

@Component({
  selector: 'app-payment-alert',
  templateUrl: './payment-alert.component.html',
  styleUrls: ['./payment-alert.component.scss'],
  animations: [
    trigger('popAlert', [
      state('show', style({
        opacity: 1,
        transform: "translate(0%, 0%)",
      })),

      state('hide', style({
        opacity: 0,
        transform: "translate(0%, -100%)"
      })),
      transition("show => hide", animate('200ms ease-in-out')),
      transition('hide => show', animate('1000ms ease-out')),
    ])
  ]
})
export class PaymentAlertComponent implements OnInit {
  
  check: IconDefinition = this.alert.state ? faCheck: faXmark;

  constructor(
    public alert: PaymentAlertService
  ) { }

  ngOnInit(): void {
  }

  closePaymentAlert() {
    this.alert.updateShowProp(false);
  }

  get alertState() {
    return this.alert.show ? 'show' : 'hide';
  }

}
