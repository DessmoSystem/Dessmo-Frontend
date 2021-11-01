import { Component, OnInit } from '@angular/core';
import { AdminSignup } from './signup-admin-interface';
import { Router } from '@angular/router';
import { SignupAdminService } from './signup-admin.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../util/token-storage.service';
import { CustomValidators } from '../../tools/custom-validator';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: []
})
export class SignupAdminComponent implements OnInit {
  token: any;

  constructor(private tokenstorageService : TokenStorageService, 
              private signupAdminService : SignupAdminService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    

  }

  //variables
  message: any;
  verificar = false;
  verificar2 = false; 

  //fin variables
  
  public adminSignupForm = this.fb.group({    
    nombreUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+( [a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+)*)")
    ])),

    apellidoUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+( [a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+)*)")
    ])),
    passwordUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { passwordnumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {passworduppercase: true}),
      CustomValidators.patternValidator(/[a-z]/, {passwordsmallcase: true}),
      CustomValidators.patternValidator(/[@#$:\^%&]/, {passwordspecialcharacter: true})
    ])),

  });

  
    
  SignupUsuario() : void{
    //local
    this.token = location.href.slice(42); 
    //producción     https://dessmo-1a622.web.app/signup/admin/:token
    //this.token = location.href.slice(42); 

    console.log(this.token)

    var usuario: AdminSignup = {
      utilitytokenUsuario: this.token,
      nombreUsuario: this.adminSignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.adminSignupForm.controls['apellidoUsuario'].value,
      passwordUsuario: this.adminSignupForm.controls['passwordUsuario'].value
    }
    

    this.signupAdminService.SignUpAdmin(usuario).subscribe(
      data => {
        this.verificar2 = true; 
        this.message = data.message;
        console.log(data)
        window.location.href= '/signin/administrador';
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
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
    this.verificar2 = false; 
  }
  

}
