import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { userNameValidator } from './shared/validators/user-name.validators';
import { passwordValidator } from './shared/validators/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  // getter for userName field to keep code short in html file
  get userNameControl() {
    return this.registrationForm.get('userName');
  }

  // getter for email control/field to keep code short in html file
  get emailControl() {
    return this.registrationForm.get('email');
  }

  // getter for email control/field to keep code short in html file
  get alternateEmailAddressesControl() {
    return this.registrationForm.get('alternateEmailAddresses') as FormArray
  }

  addAlternateEmailAddresses() {
    return this.alternateEmailAddressesControl.push(this.fb.control(''));
  }

  // create a new data member/property to bind to the view
  errorMessage = '';

  // to check form submitted or not
  isFormSubmitted = false;

  constructor(private fb: FormBuilder, public registrationService: 
    RegistrationService) { }

  ngOnInit() {
    // create a FormBuilder instance
    this.registrationForm = this.fb.group({
      userName: ['Dinanath', [Validators.required, Validators.minLength(3), userNameValidator]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: ['Mumbai'],
        state: ['Maharashtra'],
        postalcode: [400001]
      }),
      alternateEmailAddresses: this.fb.array([])
    }, { validator: passwordValidator });

    // subscribe checkbox
    this.registrationForm.get('subscribe').valueChanges
      .subscribe(subscribeCheckedValue => {
        const email = this.registrationForm.get('email');

        // email field set/unset `required` validators
        if (subscribeCheckedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }

        // to reflect latest correct status
        email.updateValueAndValidity();

      })
  }

  /* // create a formgroup instance
  registrationForm = new FormGroup({

    // details of objects/controls present in html
    userName: new FormControl('Dinanath'), // defult value enter in bracket with quotes
    password: new FormControl(''),
    confirmPassword: new FormControl(''),

    // sub/nested formgroup
    address: new FormGroup({
      city: new FormControl('Mumbai'),
      state: new FormControl('Maharashtra'),
      postalcode: new FormControl(400001)
    })

  }); */

  loadApiDataSetValue() {
    console.log('loadApiDataSetValue ');

    // setValue method works on FormGroup as well as FormControl class, But it accepts exact object structure which matches FormGroup with exact keys as FormControl, no custom deletion or addition of keys/properties allowed (will get an error). setValue is very strict with maintaining the structure of FormGroup - we must provide all FormControl values - we have to fill up all the fields.

    this.registrationForm.setValue({
      userName: 'Angular',
      password: 'Angular6',
      confirmPassword: 'Angular6',

      address: {
        city: 'Google',
        state: 'Google Corp',
        postalcode: 12345,
      }
    })
  }

  loadApiDataPatchValue() {
    console.log('loadApiDataPatchValue ');

    // patchValue method works on FormGroup as well as FormControl class, it accepts any fields - we can provide/pass value of any required field - we can fill up only required fields.

    this.registrationForm.patchValue({
      // userName: 'React',
      // password: 'React2',
      // confirmPassword: 'React2',

      address: {
        city: 'Facebook',
        state: 'Facebook Corp',
        postalcode: 678901,
      }
    })
  }

  // handler for submit button
  onSubmit() {
    console.log('submit button clicked');
    console.log(this.registrationForm.value);
    this. isFormSubmitted = true;
    this.registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success', response),
        // error => console.log('Error', error)

        // store error in data member / property to bind to the view
        error => this.errorMessage = error.statusText
      )
  }

}
