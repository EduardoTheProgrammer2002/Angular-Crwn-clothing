import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-payments-modal',
  templateUrl: './payments-modal.component.html',
  styleUrls: ['./payments-modal.component.scss']
})
export class PaymentsModalComponent implements OnInit {

  constructor(
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.modal.register('payments')
  }

  ngOnDestroy(): void {
    this.modal.unregister('payments')
  }

}
