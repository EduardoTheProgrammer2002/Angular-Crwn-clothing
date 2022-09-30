import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCheck, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';
import { PaymentAlertService } from 'src/app/services/payment-alert/payment-alert.service';


@Component({
  selector: 'app-payments-alert',
  templateUrl: './payments-alert.component.html',
  styleUrls: ['./payments-alert.component.scss'],
  animations: [
    trigger('popAlert', [
      state('show', style({
        opacity: 1,
        transform: "translate(0%, 0%)",
      })),

      state('hide', style({
        opacity: 0,
        transform: "scale(0.002)"
      })),
      transition("show => hide", animate('300ms ease-in-out')),
      transition('hide => show', animate('0ms ease-out')),
    ])
  ]
})
export class PaymentsAlertComponent implements OnInit {

  check: IconDefinition = this.alert.state ? faCheck: faXmark;

  constructor(
    public alert: PaymentAlertService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
  }

  closePaymentAlert() {
    this.alert.updateShowProp(false);

    if(this.alert.state) {
      this.modal.changeModalState('payments', false);
      return
    }
    return
  }

  get alertState() {
    return this.alert.show ? 'show' : 'hide';
  }

}
