import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/Iitems';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {
  @Input() item: IItem =  {
    imgurl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    description: 'Brown Brim',
    quantity: '25',
    price: '120'
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}
