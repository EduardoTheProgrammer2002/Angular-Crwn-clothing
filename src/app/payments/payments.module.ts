import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsModalComponent } from './payments-modal/payments-modal.component';
import { ComponentsModule } from '../components/components.module';

import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentsModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxPayPalModule
  ],
  exports: [
    PaymentsModalComponent
  ]
})
export class PaymentsModule { }
