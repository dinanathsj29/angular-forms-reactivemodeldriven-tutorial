import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { userNameValidator } from '../../shared/validators/user-name.validators';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  // define a function which returns form field name
  get userNameField(){
    return this.registrationFormBuilder.get('userName');
  }

  // in html - registrationFormBuilder.get('userName').valid replace to 'userNameField.valid and so on'

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  // new form with FormBuilder
  registrationFormBuilder = this.fb.group({
    //userName:['Dinanath', Validators.required],
    userName:['Dinanath', [Validators.required, Validators.minLength(5), userNameValidator]],
    password:[''],
    confirmPassword: [''],
    address: this.fb.group({
      city: ['Mumbai'],
      state: ['Maharashtra'],
      postalcode: [400001]
    })
  })

  loadApiDataSetValue() {
    console.log('loadApiDataSetValue ');
    // SetValue method works on FormGroup as well as FormControl class, But it accepts exact object structure which matches FormGroup with exact keys as FormControl, no custom deletion or addition of keys/properties allowed (will get an error). SetValue is very strict with maintaining the structure of FormGroup - we must provide all FormControl values - we have to fill up all the fields.

    this.registrationFormBuilder.setValue({
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
    // PickValue method works on FormGroup as well as FormControl class, it accepts any fields - we can provide/pass value of any required field - we can filll up only required fields.

    this.registrationFormBuilder.patchValue({
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

}
