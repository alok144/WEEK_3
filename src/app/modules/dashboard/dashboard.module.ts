import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {path:'home',component:HomeComponent}
];


@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DashboardModule { }
