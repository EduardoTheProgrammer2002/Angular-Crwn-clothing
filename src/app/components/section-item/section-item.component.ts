import { Component, Input, OnInit } from '@angular/core';
import IItems, { IItem, IITemToStore } from 'src/app/interfaces/Iitems';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { ItemService } from 'src/app/services/itemService/item.service';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {
  @Input() item:(IItems | null) = null

  //the variables to show the icons that represents the rating
  rating: number[] = [];
  showHalfStar: boolean = false

  //Rating Icons
  starIcon = faStar;
  startHalf = faStarHalf;
  
  constructor(
    private modal: ModalService,
    private storage: StorageService,
    private Item: ItemService
    
  ) { }

  ngOnInit(): void {
    this.rating =  Array(Math.trunc(this.item?.rating?? 0));
    this.showHalfStar = this.isFloat((this.item?.rating ? this.item.rating : 1));
  }

  //func to check when a number is floating
  isFloat(n:number): boolean{
    return Number(n) === n && n % 1 !== 0;
  }

  addItem() {
    //getting the authState
    let authState = false;
    this.storage.authState$.subscribe(state => {
      authState = state
    });
    
    //Access token
    const token = this.storage.token;

    //if authState is false the user ca not add items
    if(!authState) {
      this.openModal('auth');
      console.log('Log in to add item to cart!');
      return;
    }

    //if the authstate is true we add the item to the data base
    const item: IITemToStore = {
      name: this.item?.name?? '',
      imgUrl: this.item?.imageUrl?? '',
      price: this.item?.price?? 0
    };
    
    //make the request to store the item
    return this.Item.storeItem(item, token?? '').subscribe(res => {
      const response:any = res;
      if (!response.ok) {
        console.error(response.error);
        return;
      }

      //the item to be added to the local storage
      const ItemToAdd: IItem = {
        imgurl: item.imgUrl,
        description: item.name,
        quantity: '1',
        price: JSON.stringify(item.price)
      }

      //add item to local storage and update the cart 
      this.storage.addItem(ItemToAdd);
      return;
    });
  }

  openModal(id: string) {
    this.modal.toggleModal(id);
  }

}
