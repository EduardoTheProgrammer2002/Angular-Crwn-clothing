import { Component, Input, OnInit } from '@angular/core';
import IItems, { IITemToStore } from 'src/app/interfaces/Iitems';
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
    //we access the authState to take make sure whether there is a user authenticated or not.
    return this.storage.authState.subscribe(val => {
      const authState = val;

      //if authState is false, no one is able to add items to cart.
      if (!authState) {
        this.openModal('auth');
        console.log('Log in to add item to cart!');
        return;
      }

      
      //access the accessToken to send the request to the backend
      return this.storage.token.subscribe(token => {
        //make the item object
        const item: IITemToStore = {
          name: this.item?.name?? '',
          imgUrl: this.item?.imageUrl?? '',
          price: this.item?.price?? 0,
        };

        //send the request to the backend with the token and item to be store
        this.Item.storeItem(item, token?? '').subscribe(res => {
          const response:any = res;
          if (!response.ok) {
            console.error(response.error);
            return;
          }
          return;
        });

        this.Item.setLocalItems(token);
      });
    })
  }

  openModal(id: string) {
    this.modal.toggleModal(id);
  }

}
