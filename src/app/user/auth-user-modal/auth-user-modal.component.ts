import { Component, OnInit } from '@angular/core';
import { faUserTie, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IAuthUser } from 'src/app/interfaces/Iauth';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { AuthUserModalService } from 'src/app/services/user-modal/auth-user-modal.service';


@Component({
  selector: 'app-auth-user-modal',
  templateUrl: './auth-user-modal.component.html',
  styleUrls: ['./auth-user-modal.component.scss']
})
export class AuthUserModalComponent implements OnInit {
  user!: IAuthUser;
  
  //icon
  userIcon: IconDefinition = faUserTie;
  

  constructor(
    private modal: ModalService,
    public authModal: AuthUserModalService,
    public storage: StorageService
    
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
