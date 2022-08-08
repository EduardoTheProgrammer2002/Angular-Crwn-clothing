import { Component, Input, OnInit } from '@angular/core';
import IItems from 'src/app/interfaces/Iitems';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';

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
    private storage: StorageService
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
    this.storage.authState.subscribe(val => {
      const authState = val;

      //if authState is false, no one is able to add items to cart.
      if (!authState) {
        this.openModal('auth');
        return;
      }

      //make the request to add the item
      return;
    })
  }

  openModal(id: string) {
    this.modal.toggleModal(id);
  }

}
