import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/Iitems';
import { faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  trashbin: IconDefinition = faTrash;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}
