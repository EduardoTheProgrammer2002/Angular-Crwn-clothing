import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUsersGuard } from './guards/authenticated/auth-users.guard';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemSectionComponent } from './pages/item-section/item-section.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'section/:id',
    component: ItemSectionComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthUsersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
