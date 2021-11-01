import { Component, OnInit } from '@angular/core';
import { UserSignin } from '../sign-in-interface';
import { Router } from '@angular/router';
import { SigninAdminService } from './signin-admin.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../util/token-storage.service';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: []
})

export class SigninAdminComponent implements OnInit {

  constructor(private tokenstorageService : TokenStorageService, 
              private signinAdminService : SigninAdminService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  //variables
  message: any;
  verificar = false;
  //fin variables

  public adminSigninForm = this.fb.group({    
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])), 

    passwordUsuario: new FormControl('', 
    Validators.required)
  });

  SigninUsuario() : void{
    var usuario: UserSignin = {
      usernameUsuario: this.adminSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.adminSigninForm.controls['passwordUsuario'].value
    }

    this.signinAdminService.SignInAdmin(usuario).subscribe(
      data => {
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);

        window.location.href= '/admin';

      },

      err => {
        this.message = err.error.message;
        this.verificar = true;
        console.log(err)

      }
    )
  }

  AlertDefault(){
    this.verificar = false;
  }
}
