import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "login form";
  loginForm:any;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  reset(){
    this.loginForm.reset();
  }
  login(){
    alert("You Entered Successfully!!");
    this.router.navigate(['/dashboard']);
  }

  checkfunction(){
    // console.log(this.loginForm.value.password);
    let data = {
      "firstname": this.loginForm.value.email,
      "lastname": this.loginForm.value.password
    }
    console.log(data);
    return data;
  }

  ngOnInit(): void {
  }

}
