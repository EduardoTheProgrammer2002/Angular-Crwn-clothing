import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { AuthUserModalService } from 'src/app/services/user-modal/auth-user-modal.service';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authState: boolean = false;
  user: IconDefinition = faUser;

  constructor(
    private modal: ModalService,
    public storage: StorageService,
    private cart: CartService,
    public authModal: AuthUserModalService
  ) { }

  ngOnInit(): void {
    this.storage.authState$.subscribe(val => {
      this.authState = val;
    })
  }


  openModal(event: Event, id: string) {
    event.preventDefault();
    this.modal.toggleModal(id);
  }

  openCartModal(event: Event) {
    event.preventDefault();
    this.cart.toggleModal();

    if(this.authModal.show) {
      this.authModal.updateShowProp(false);
    }
  }

  openAuthUserModal(event: Event) {
    event.preventDefault();
    this.authModal.toggleModal();

    if(this.cart.show) {
      this.cart.updateShowProp(false);
    }
  }
}
