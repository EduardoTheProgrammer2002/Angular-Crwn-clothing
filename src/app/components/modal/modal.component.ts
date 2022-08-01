import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alertService/alert.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalId:string = ''

  constructor(
    public modal: ModalService,
    public el: ElementRef,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalId);
    this.alert.show.next(false);
  }

}
