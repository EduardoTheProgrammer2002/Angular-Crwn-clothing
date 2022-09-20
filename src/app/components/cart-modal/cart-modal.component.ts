import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { faShoppingBag, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cartService/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  showItems: boolean = false;
  items: any;
  emptyCart: IconDefinition = faShoppingBag;

  constructor(
    private storage: StorageService,
    private cart: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //closing the modal when the user scroll down the page
    window.addEventListener('scroll', () => {
      if (window.scrollY > 420) {
        this.cart.updateShowProp(false);
      }
    });
    
    this.storage.items$.subscribe(items => {
      if (!items?.length) {
        this.showItems = false;
        return;
      }

      this.items = items;
      this.showItems = true;
      return;
    });
  }

  redirect(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/checkout');
    this.cart.updateShowProp(false);
  }

}
