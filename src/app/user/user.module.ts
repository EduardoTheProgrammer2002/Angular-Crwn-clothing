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




@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent,
    SignoutModalComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    AuthModalComponent,
    SignoutModalComponent
  ]
})
export class UserModule { }
