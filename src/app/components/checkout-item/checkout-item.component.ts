import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/Iitems';
import { faTrash, IconDefinition, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { ItemService } from 'src/app/services/itemService/item.service';
import { StorageService } from 'src/app/services/storageService/storage.service';

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
  token: (string| null) = this.storage.token;

  //icons
  trashbin: IconDefinition = faTrash;
  plus: IconDefinition = faGreaterThan;
  minus: IconDefinition = faLessThan;

  constructor(
    private Item: ItemService,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  /* make an operation on the quantity of the item in the database and in the localstorage(operation could be, Increase or decrease). */
  operateOnItemQuantity(operation:string ,item: IItem) {
    const newItem = {
      operation: operation,
      item: this.item
    }

    //update the item quantity in the database
    this.Item.operateOnItemQuantity(newItem, this.token?? '').subscribe((res:any) => {
      if(!res.ok) {
        console.error(res.err);
        
        return;
      }

      //update the item quantity in the localstorage
      this.storage.OperateOnItemQuantity(operation, this.item)
      
    });
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
