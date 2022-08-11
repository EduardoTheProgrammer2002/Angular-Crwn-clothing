import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { NavComponent } from './nav/nav.component';
import { DirectoryComponent } from './directory/directory.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ShopSectionComponent } from './shop-section/shop-section.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionDirectoryComponent } from './section-directory/section-directory.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './modal/modal.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToUpButtonComponent } from './scroll-to-up-button/scroll-to-up-button.component';
import { AlertComponent } from './alert/alert.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartIconComponent,
    NavComponent,
    DirectoryComponent,
    MenuItemComponent,
    ButtonComponent,
    ShopSectionComponent,
    SectionItemComponent,
    SectionDirectoryComponent,
    ModalComponent,
    TabContainerComponent,
    TabComponent,
    InputComponent,
    ScrollToUpButtonComponent,
    AlertComponent,
    CartModalComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    CartIconComponent,
    CartModalComponent,
    NavComponent,
    DirectoryComponent,
    ButtonComponent,
    ShopSectionComponent,
    SectionDirectoryComponent,
    ModalComponent,
    TabContainerComponent,
    TabComponent,
    InputComponent,
    ScrollToUpButtonComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }
