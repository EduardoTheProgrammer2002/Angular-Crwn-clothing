import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  email = new UntypedFormControl('', [
    Validators.required,
    Validators.email
  ]);
  age = new UntypedFormControl('', [
    Validators.required,
    Validators.min(13),
    Validators.max(90)
  ]);
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  confirm_password = new UntypedFormControl('', [
    Validators.required
  ]);

  registerForm = new UntypedFormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password
  })

}
