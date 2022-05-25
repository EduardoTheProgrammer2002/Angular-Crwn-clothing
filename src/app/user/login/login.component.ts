import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //formControls
  email: FormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  password: FormControl = new FormControl('', [
    Validators.minLength(8)
  ]);


  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

}
