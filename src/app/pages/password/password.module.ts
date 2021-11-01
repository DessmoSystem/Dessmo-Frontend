import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';



@NgModule({
  declarations: [
    PasswordComponent,
    RestorePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PasswordModule { }
