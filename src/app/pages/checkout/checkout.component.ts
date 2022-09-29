import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { faShoppingBag, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items:any;
  showItems: boolean = false //this store the condition value, to know when to show the Empty view or the items.

  //empty icon
  emptyBag: IconDefinition = faShoppingBag;

  constructor(
    public storage: StorageService,
    private router: Router,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.storage.items$.subscribe(items => {
      this.items = items
      this.showItems = true;
      if(!this.items || this.items.length < 1) {
        this.showItems = false
      }
      this.storage.setTotalToPay()
    });
  }

  openPaymentModal(id:string) {
    this.modal.toggleModal(id); 
  }

  //this redirect the user to the shop section when clicking the add itmes in the empty view
  redirect(url: string) {
    this.router.navigateByUrl('/shop');
  }

}
