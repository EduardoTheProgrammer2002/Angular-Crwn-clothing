import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // user Icon and password icon
  user = faUser;
  lock = faLock;


  //formControls
  email: FormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  password: FormControl = new FormControl('', [
    Validators.minLength(8),
    Validators.required
  ]);


  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

}
