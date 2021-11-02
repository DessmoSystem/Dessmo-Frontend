import { Component, OnInit } from '@angular/core';
import { UserSignin } from '../sign-in-interface';
import { Router } from '@angular/router';
import { SigninUserService } from './signin-user.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../util/token-storage.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: []
})
export class SigninUserComponent implements OnInit {

  constructor(private tokenstorageService : TokenStorageService, 
              private signinUserService : SigninUserService, 
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
  
  public userSigninForm = this.fb.group({    
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])), 

    passwordUsuario: new FormControl('', 
    Validators.required)
  });

  SigninUsuario() : void{
    var usuario: UserSignin = {
      usernameUsuario: this.userSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.userSigninForm.controls['passwordUsuario'].value
    }

    this.signinUserService.SignInUser(usuario).subscribe(
      data => {
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);
        window.location.href= '/user';

        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      
      err => {
        this.message = err.error.message;
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

}
