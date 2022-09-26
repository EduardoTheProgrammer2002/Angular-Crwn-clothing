import { Component, OnDestroy, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, OnDestroy {
  totalToPay: number = 0;

  constructor(
    private storage: StorageService
  ) { 
    render(
      {
        id:"#myPaypalButtons",
        currency: "USD",
        value: `${this.storage.totalToPay}`,
        onApprove: (details) => {
          alert("Transaction Successfull");
        },
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('destro');
  }

}
