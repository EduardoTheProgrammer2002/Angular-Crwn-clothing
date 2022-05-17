import { Component, Input, OnInit } from '@angular/core';
import IShopData from 'src/app/interfaces/IShop';

@Component({
  selector: 'app-shop-section',
  templateUrl: './shop-section.component.html',
  styleUrls: ['./shop-section.component.scss']
})
export class ShopSectionComponent implements OnInit {
  @Input() section: ( IShopData | null) = null;
  

  constructor() { }

  ngOnInit(): void {
    if (this.section) {
      this.section.items = this.section.items.filter((item) => item.id <= 4)
    }
  }

}
