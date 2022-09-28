import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { ItemService } from 'src/app/services/itemService/item.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  token: (string| null) = this.storage.token;

  public payPalConfig?: IPayPalConfig;

  constructor(
    private storage: StorageService,
    private item: ItemService
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

      console.log(res.msg);
    });
  }
}
