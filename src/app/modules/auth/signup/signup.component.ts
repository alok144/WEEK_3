import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RxwebValidators } from "@rxweb/reactive-form-validators"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'Angular Form Validation Tutorial';
  registerForm: any;
  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.pattern("^[A-Za-z ]*$")]],
      lastName: ['', [Validators.pattern("^[A-Za-z ]*$")]],
      contact: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6),RxwebValidators.compare({fieldName:'password'})]]
    });
  }

  // checkPasswords() { // here we have the 'passwords' group
  //   let pass = this.registerForm.get('password').value;
  //   let confirmPass = this.registerForm.get('cpassword').value;

  //   return pass === confirmPass ? null : { notSame: true }     
  // }


  reset() {
    this.registerForm.reset();
  }

  register() {
    console.log("Registration from values: ", this.registerForm.value);
    let data = {
      "firstname": this.registerForm.value.firstName,
      "lastname": this.registerForm.value.lastName
    }
    //console.log("Now final data to send to server for registration : ", data);
    alert("Registration Successful!!");
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
