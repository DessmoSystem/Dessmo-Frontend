import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';

import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';



@NgModule({
  declarations: [
    UserComponent,
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
