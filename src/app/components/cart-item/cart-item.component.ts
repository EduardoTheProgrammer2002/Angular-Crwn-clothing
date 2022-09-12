import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/Iitems';
import { ItemService } from 'src/app/services/itemService/item.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: IItem =  {
    imgurl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    description: 'Brown Brim',
    quantity: '25',
    price: '120'
  }
  token: (string| null) = this.storage.token;
  removeIcon: IconDefinition = faTrash;

  constructor(
    public Item: ItemService,
    public storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  removeItem(item:IItem) {
    //removing the item
    return this.Item.deleteItem(item, this.token?? '').subscribe((res) => {
      const response:any = res;
      if (!response.ok) {
        console.error(response.err);
        return;
      }
      this.storage.removeItem(item);
      this.storage.decreaseQuantity(Number(item.quantity));
      
    });

  }

}
