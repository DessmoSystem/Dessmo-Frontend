import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { SigninUserComponent } from './signin-user/signin-user.component';
import { SigninSuperadminComponent } from './signin-superadmin/signin-superadmin.component';



@NgModule({
  declarations: [  
    SigninAdminComponent,
    SigninUserComponent,
    SigninSuperadminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
