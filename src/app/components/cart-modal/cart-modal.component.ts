import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  showItems: boolean = false;
  items: any;
  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.storage.items.subscribe(items => {
      if (!items) {
        this.showItems = false;
        return;
      }

      this.items = items;
      console.log(this.items)
      this.showItems = true;
      return;
    });
  }

}
