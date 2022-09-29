import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsModalComponent } from './payments-modal/payments-modal.component';
import { ComponentsModule } from '../components/components.module';

import { NgxPayPalModule } from 'ngx-paypal';
import { PaymentAlertComponent } from './payment-alert/payment-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from '../user/user.module';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentsModalComponent,
    PaymentAlertComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxPayPalModule,
    FontAwesomeModule
  ],
  exports: [
    PaymentsModalComponent,
    PaymentAlertComponent
  ]
})
export class PaymentsModule { }
