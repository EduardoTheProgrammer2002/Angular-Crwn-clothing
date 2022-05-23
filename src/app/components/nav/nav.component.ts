import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  clck() {
    console.log('click');
  }

  openModal(event: Event, id: string) {
    event.preventDefault();
    this.modal.toggleModal(id);
  }
}
