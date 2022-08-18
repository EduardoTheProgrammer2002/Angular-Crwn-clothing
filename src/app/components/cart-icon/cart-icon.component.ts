import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {

  constructor(
    public storage: StorageService
  ) { }

  ngOnInit(): void {
  }

}
