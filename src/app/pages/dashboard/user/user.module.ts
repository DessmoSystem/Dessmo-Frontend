import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';

import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';



@NgModule({
  declarations: [
    UserComponent,
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
