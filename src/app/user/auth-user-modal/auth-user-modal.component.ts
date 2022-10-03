import { Component, OnInit } from '@angular/core';
import { faUserTie, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';
import { AuthUserModalService } from 'src/app/services/user-modal/auth-user-modal.service';


@Component({
  selector: 'app-auth-user-modal',
  templateUrl: './auth-user-modal.component.html',
  styleUrls: ['./auth-user-modal.component.scss']
})
export class AuthUserModalComponent implements OnInit {
  
  //icon
  user: IconDefinition = faUserTie;
  

  constructor(
    private modal: ModalService,
    public authModal: AuthUserModalService
  ) { }

  ngOnInit(): void {
  }

  openModal(event: Event, id: string) {
    event.preventDefault();
    this.modal.toggleModal(id);
  }

  closeAuthModal() {
    this.authModal.toggleModal();
  }

}
