import { Component } from '@angular/core';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { UntypedFormControl } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Iuser from 'src/app/interfaces/Iauth';
import { AlertService } from 'src/app/services/alertService/alert.service';
import { AuthService } from 'src/app/services/authServices/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // user Icon and password icon
  user = faUser;
  lock = faLock;

  //response of the backend
  response: any;

  constructor(
    private auth: AuthService,
    private storage: StorageService,
    private alert: AlertService,
    private modal: ModalService
  ) {  }

  //formControls
  email: UntypedFormControl = new UntypedFormControl('', [
    Validators.email,
    Validators.required
  ]);
  password: UntypedFormControl = new UntypedFormControl('', [
    Validators.minLength(8),
    Validators.required
  ]);


  loginForm = new UntypedFormGroup({
    email: this.email,
    password: this.password
  });

  //method used to sign a user in
  signIn(event: Event) {
    event.preventDefault();
    const user: Iuser = {
      email: this.email.value,
      password: this.password.value
    }
    this.auth.signIn(user).subscribe((res) => {
      this.response = res
      this.alert.updateShowProp(true);

      //something failed and there is an error
      if (!this.response.ok) {
        //setting the alert component
        this.alert.updateMsg(this.response.error);
        this.alert.failedRequest();
        this.storeAuthState(false);
        return;
      }

      //setting the alert component
      this.alert.updateMsg("Success! now you're logged in");
      this.alert.successRequest();

      //storing the token in local storage and store the authState
      const tokens = this.response.tokens;
      this.storage.storeTokens(tokens);
      this.storeAuthState(true);

      //clear the form
      this.clearForm();
      this.modal.setTimeToCloseModal(3100, 'auth');
    });
    return;
  }

  clearForm() {
    this.loginForm.markAsUntouched();
    this.email.setValue('');
    this.password.setValue('');
  }

  storeAuthState(doIt: boolean) {
    this.storage.storeAuthState(doIt);
  }

}
