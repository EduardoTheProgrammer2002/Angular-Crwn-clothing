import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-signout-modal',
  templateUrl: './signout-modal.component.html',
  styleUrls: ['./signout-modal.component.scss']
})
export class SignoutModalComponent implements OnInit, OnDestroy {

  constructor(
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.modal.register('signout');
  }

  ngOnDestroy(): void {
    this.modal.unregister('signout');
  }

}
