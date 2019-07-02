import { AbstractControl } from "@angular/forms";

// create a validator function to avoid junk/spam names like `junk`
// it returns `string message` or null
export function userNameValidator(control: AbstractControl): { [key: string]: any } | null {
    const isUserNameCorrect = /junk/.test(control.value);
    return isUserNameCorrect ? { 'validateUserNameError': { value: control.value } } : null;
}
