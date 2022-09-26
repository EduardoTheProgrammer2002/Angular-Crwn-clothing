import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items:any;
  constructor(
    public storage: StorageService,
    private router: Router,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.storage.items$.subscribe(items => {
      this.items = items
      if(!this.items || this.items.length < 1) {
        this.router.navigateByUrl('/');
      }
      this.storage.setTotalToPay()
    });
  }

  openPaymentModal(id:string) {
    this.modal.toggleModal(id);
  }

}
