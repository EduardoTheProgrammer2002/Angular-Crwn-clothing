import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { ItemService } from 'src/app/services/itemService/item.service';
import { ModalService } from 'src/app/services/modal.service';
import { PaymentAlertService } from 'src/app/services/payment-alert/payment-alert.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  token: (string| null) = this.storage.token;

  public payPalConfig?: IPayPalConfig;

  constructor(
    private storage: StorageService,
    private item: ItemService,
    private paymentAlert: PaymentAlertService,
    private modal: ModalService
  ) {}

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.clientID,
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: this.storage.totalToPay.toString(),
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: this.storage.totalToPay.toString(),
                  },
                },
              }
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {        
        actions.order.get().then((details: any) => {
          this.modal.changeModalState('payments', false);
          this.deleteAllitems();
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
        this.OpenPaymentAlert("Wow, Sorry!", "Your payment could not be made.", false);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }



  //this deletes all items for the current user logged in
  deleteAllitems() {
    this.item.deleteAllItems(this.token?? '').subscribe((res:any) => {
      if (!res.ok) {
        console.log(res.err)
        return;
      }
      this.OpenPaymentAlert("Congratulations!", "Your payment has been made.", true);
      this.storage.removeItems()
      console.log(res.msg);
    });
  }

  //Open payment alert
  OpenPaymentAlert(header: string, msg: string, state: boolean) {
    this.paymentAlert.updateShowProp(true);
    this.paymentAlert.updateContent(msg, header);

    if(!state) {
      this.paymentAlert.failedPayment()
      return;
    }

    this.paymentAlert.successPayment();
    return
  }
}
