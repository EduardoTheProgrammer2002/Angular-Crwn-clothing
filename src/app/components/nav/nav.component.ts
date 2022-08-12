import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authState: boolean = false;
  constructor(
    private modal: ModalService,
    private storage: StorageService
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
}
