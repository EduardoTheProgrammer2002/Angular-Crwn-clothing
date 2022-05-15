import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { NavComponent } from './nav/nav.component';
import { DirectoryComponent } from './directory/directory.component';
import { MenuItemComponent } from './menu-item/menu-item.component';



@NgModule({
  declarations: [
    CartIconComponent,
    NavComponent,
    DirectoryComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartIconComponent,
    NavComponent,
    DirectoryComponent
  ]
})
export class ComponentsModule { }
