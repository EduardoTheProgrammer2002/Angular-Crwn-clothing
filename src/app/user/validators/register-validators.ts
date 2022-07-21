import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class RegisterValidators {
    //define a method that takes a nameControl and the matchingNameControl and returns a validatorFn
    static match(nameControl: string, matchingNameControl: string): ValidatorFn {
        //returning a validatorFn that takes a formGroup and returns a validatorError or null
        return (control: AbstractControl): ValidationErrors | null => {
            //get password and confirmPassword Formcontrols
            const password = control.get(nameControl);
            const confirmPassword = control.get(matchingNameControl);

            //make sure that the password and confirmPassword are not null or undefined
            if (!password || !confirmPassword) {
                console.log('Please Provide the nameControl and the matchingNameControl to compare')
                return {noFieldsFound: true};
            }

            //defined a error variable verify if both fields match
            const error = password.value === confirmPassword.value ? null : {noMatch: true};
            confirmPassword.setErrors(error); //set the error in the confirmPassword formControls

            return error;
        }
    }
}
