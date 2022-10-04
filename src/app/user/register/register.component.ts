import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import Iuser from 'src/app/interfaces/Iauth';
import { AlertService } from 'src/app/services/alertService/alert.service';
import { AuthService } from 'src/app/services/authServices/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { StorageService } from 'src/app/services/storageService/storage.service';
import { RegisterValidators } from '../validators/register-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  //backend response
  response: any;
  
  //FormControlers
  name = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  email = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/\b[a-z]+/g)
  ]);
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  confirmPassword = new UntypedFormControl('', [
    Validators.required
  ]);

  registerForm = new UntypedFormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword
  }, RegisterValidators.match('password', 'confirmPassword'));

  constructor(
    private auth: AuthService,
    private storage: StorageService,
    private alert: AlertService,
    private modal: ModalService
  ) {}

  signUp(event: Event) {
    event.preventDefault();

    //user data
    const user: Iuser = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value
    }

    //method to sign the user up.
    this.auth.signUp(user).subscribe(val => {
      this.response = val;
      this.alert.updateShowProp(true);
      
      //an error came up
      if (!this.response.ok) {
        this.alert.failedRequest();
        this.alert.updateMsg(this.response.error);
        this.storeAuthState(false)
        return;
      }

      //The user is ready to be signed up
      //get the token and store it, also store the authState
      const tokens = this.response.tokens; 
      this.storage.storeTokens(tokens);
      this.storeAuthState(true);

      //get the alert ready
      this.alert.successRequest();
      this.alert.updateMsg(this.response.msg);

      //getting the current user info
      this.auth.getAuthUser(tokens.accessToken).subscribe((user:any) => {
        if(user.err) {
          console.error(user.err)
          return
        }
        console.log(user.user);
        this.storage.setUser(user.user);
        
        return
      })
      
      //clear form and close modal
      this.clearForm();
      this.modal.setTimeToCloseModal(3100, 'auth');
    })
  }

  storeAuthState(doIt: boolean) {
    this.storage.storeAuthState(doIt);
  }

  clearForm() {
    this.name.setValue('');
    this.email.setValue('');
    this.password.setValue('');
    this.confirmPassword.setValue('');

    //mark as untouched
    this.registerForm.markAsUntouched()
  }

}
