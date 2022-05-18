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



@NgModule({
  declarations: [
    CartIconComponent,
    NavComponent,
    DirectoryComponent,
    MenuItemComponent,
    ButtonComponent,
    ShopSectionComponent,
    SectionItemComponent,
    SectionDirectoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CartIconComponent,
    NavComponent,
    DirectoryComponent,
    ButtonComponent,
    ShopSectionComponent,
    SectionDirectoryComponent
  ]
})
export class ComponentsModule { }
