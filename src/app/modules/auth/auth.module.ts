import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent}
];


@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AuthModule { }
