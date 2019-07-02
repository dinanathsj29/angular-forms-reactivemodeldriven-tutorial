import { AbstractControl } from "@angular/forms";

// create a validator function to match password and confirm password field
// it returns `boolean` or null
export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');

    if (passwordControl.pristine && confirmPasswordControl.pristine || passwordControl.untouched && confirmPasswordControl.untouched) {
      return null;
    }

    return passwordControl && confirmPasswordControl && passwordControl.value != confirmPasswordControl.value ? { 'passwordMisMatchError': true } : null;
}
