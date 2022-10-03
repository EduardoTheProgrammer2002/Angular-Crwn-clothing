import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignoutModalComponent } from './signout-modal/signout-modal.component';
import { SignoutComponent } from './signout/signout.component';
import { PaymentsComponent } from './payments/payments/payments.component';
import { PaymentsModalComponent } from './payments/payments-modal/payments-modal.component';
import { PaymentsAlertComponent } from './payments/payments-alert/payments-alert.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { AuthUserModalComponent } from './auth-user-modal/auth-user-modal.component';




@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent,
    SignoutModalComponent,
    SignoutComponent,
    PaymentsComponent,
    PaymentsModalComponent,
    PaymentsAlertComponent,
    AuthUserModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPayPalModule
  ],
  exports: [
    AuthModalComponent,
    SignoutModalComponent,
    PaymentsModalComponent,
    PaymentsAlertComponent,
    AuthUserModalComponent
  ]
})
export class UserModule { }
