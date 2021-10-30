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
  }

  //variables
  message: any;
  verificar = false;
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
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },

      err => {
        this.message = err.error.message;
        this.verificar = true;      }
    )
  }

  AlertDefault(){
    this.verificar = false;
  }

}
