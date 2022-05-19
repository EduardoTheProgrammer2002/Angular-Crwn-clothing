import { Component, OnInit, OnDestroy, createNgModuleRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IShopData from 'src/app/interfaces/IShop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent implements OnInit, OnDestroy {
  id = ''; //this store the id passed as parameters to the route
  section:(IShopData | null) = null; 

  constructor(
    public route: ActivatedRoute,
    private data: ShopService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      
      //filtering the exact data depending on the url parameter
      this.section = this.data.shopData.filter((sec) => sec.id === parseFloat(this.id))[0];
    })
  }

  ngOnDestroy(): void {
  }

}
