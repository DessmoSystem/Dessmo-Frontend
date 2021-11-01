import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupUserVerifyComponent } from './signup-user/signup-user-verify/signup-user-verify.component';



@NgModule({
  declarations: [
    SignupAdminComponent,
    SignupUserComponent,
    SignupUserVerifyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
