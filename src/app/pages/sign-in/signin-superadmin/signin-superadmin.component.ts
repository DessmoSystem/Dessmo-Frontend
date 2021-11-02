import { Component, OnInit } from '@angular/core';
import { UserSignin } from '../sign-in-interface';
import { Router } from '@angular/router';
import { SigninSuperadminService } from './signin-superadmin.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../util/token-storage.service';

@Component({
  selector: 'app-signin-superadmin',
  templateUrl: './signin-superadmin.component.html',
  styleUrls: []
})
export class SigninSuperadminComponent implements OnInit {
  
  constructor(private tokenstorageService : TokenStorageService, 
              private signinSuperadminService : SigninSuperadminService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.ifLogin();  
  }

  //variables
  message: any;
  verificar = false;
  userToken: any;
  //fin variables
  
  public superAdminSigninForm = this.fb.group({
    
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])), 

    passwordUsuario: new FormControl('', 
    Validators.required)
  });

  SigninUsuario() : void{
    var usuario: UserSignin = {
      usernameUsuario: this.superAdminSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.superAdminSigninForm.controls['passwordUsuario'].value
    }

    this.signinSuperadminService.SignInSuperAdmin(usuario).subscribe(
      data => {
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);
        window.location.href= '/superadmin/generate-user';
      },

      err => {
        this.message = "Correo o Contraseña Incorrecta"
        this.verificar = true;      }
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

  AlertDefault(){
    this.verificar = false;
  }

  Exit() {
    this.tokenstorageService.signOut();
  }

}
