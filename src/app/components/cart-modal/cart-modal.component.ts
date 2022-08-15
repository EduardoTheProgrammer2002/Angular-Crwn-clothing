import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { faCartPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  showItems: boolean = false;
  items: any;
  emptyCart: IconDefinition = faCartPlus;

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.storage.items$.subscribe(items => {
      if (!items) {
        this.showItems = false;
        return;
      }

      this.items = items;
      this.showItems = true;
      return;
    });
  }

}
