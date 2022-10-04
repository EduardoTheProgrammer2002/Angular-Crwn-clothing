import { Component, OnInit } from '@angular/core';
import { faTriangleExclamation, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/services/alertService/alert.service';
import { AuthService } from 'src/app/services/authServices/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { AuthUserModalService } from 'src/app/services/user-modal/auth-user-modal.service';
import { AuthUserModalComponent } from '../auth-user-modal/auth-user-modal.component';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {
  warning:IconDefinition = faTriangleExclamation;
  check: IconDefinition = faCheck;
  cancel: IconDefinition = faBan;

  constructor(
    private modal: ModalService,
    private auth: AuthService,
    private storage: StorageService,
    private alert: AlertService,
    private authModal: AuthUserModalService
  ) { }

  ngOnInit(): void {
  }

  closeModal(event: Event, id: string) {
    event.preventDefault();
    this.modal.toggleModal(id);
  }

  signOut() {
    this.auth.signOut().subscribe(val => {
        const response: any = val;
        this.alert.updateShowProp(true);

        if(!response.ok) {
          this.alert.updateMsg(response.error);
          this.alert.failedRequest();
          return;
        }
        
        this.storage.removeTokens();
        this.storage.removeItems();
        this.storeAuthState(false);
        this.storage.setUser(null);
        this.alert.updateMsg(response.msg);
        this.alert.successRequest();
        this.authModal.updateShowProp(false);
        this.modal.setTimeToCloseModal(3000, 'signout');
    });
  }

  storeAuthState(doIt: boolean) {
    this.storage.storeAuthState(doIt);
  }
}
