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
    this.ifLogin()
  }

  //variables
  message: any;
  verificar = false;
  userToken: any;
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

  ifLogin(){

    if(this.tokenstorageService.getUser()){
      this.userToken = this.tokenstorageService.getUser()
      var auth = this.userToken.authorities[0]

      if(auth.authority == 'ROLE_USER'){
        window.location.href= 'user'
      }    
      if(auth.authority == 'ROLE_ADMIN'){
        window.location.href= 'admin'
      }    
      if(auth.authority == 'ROLE_SUPERADMIN'){
        window.location.href= 'superadmin'
      }
    }
  }

  
  
/*
if(auth.authority == 'ROLE_USER'){
          this.Exit();
          window.location.href= 'sigin/user'
        }    
        if(auth.authority == 'ROLE_ADMIN'){
          this.Exit();
          window.location.href= 'signin/administrador'
        }    
        if(auth.authority == 'ROLE_SUPERADMIN'){
          this.Exit();
          window.location.href= 'signin/superadmin'
        }


        if(auth.authority == 'ROLE_USER'){
          window.location.href= 'user'
        }    
        if(auth.authority == 'ROLE_ADMIN'){
          window.location.href= 'admin'
        }    
        if(auth.authority == 'ROLE_SUPERADMIN'){
          window.location.href= 'superadmin'
        }
*/
  AlertDefault(){
    this.verificar = false;
  }

  Exit() {
    this.tokenstorageService.signOut();
  }

}

