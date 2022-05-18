import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IItems from 'src/app/interfaces/Iitems';
import IShopData from 'src/app/interfaces/IShop';

@Component({
  selector: 'app-shop-section',
  templateUrl: './shop-section.component.html',
  styleUrls: ['./shop-section.component.scss']
})
export class ShopSectionComponent implements OnInit {
  @Input() section: ( IShopData | null) = null;

  // this is the filtered list of items to render in the template 
  items: (IItems[] | null) = null;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.section) {
      this.items = this.section.items.filter((item) => item.id <= 4)
    }
  }

  redirect(event: Event, id: (number | null)) {
    event.preventDefault();
    this.router.navigateByUrl(`/section/${id}`);
  }

}
