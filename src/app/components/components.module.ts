import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    CartIconComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartIconComponent,
    NavComponent
  ]
})
export class ComponentsModule { }
