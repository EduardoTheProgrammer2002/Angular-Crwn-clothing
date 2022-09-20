import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items:any;
  constructor(
    public storage: StorageService
  ) { }

  ngOnInit(): void {
    this.storage.items$.subscribe(items => {
      this.items = items
      this.storage.setTotalToPay()
    });
  }

}
