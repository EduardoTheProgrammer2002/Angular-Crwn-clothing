import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
