import { Component } from '@angular/core';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { UntypedFormControl } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Iuser from 'src/app/interfaces/Iauth';
import { AuthService } from 'src/app/services/authServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // user Icon and password icon
  user = faUser;
  lock = faLock;
  response: any;

  constructor(
    private auth: AuthService
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


  signIn(event: Event) {
    event.preventDefault();
    const user: Iuser = {
      email: this.email.value,
      password: this.password.value
    }
    this.auth.signIn(user).subscribe((res) => {
      this.response = res
      if (!this.response.ok) {
        return;
      }
      
      console.log(res);
    });
  }

}
