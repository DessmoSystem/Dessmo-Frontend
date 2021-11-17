import { Component, OnInit } from '@angular/core';
import { UserSignup } from './signup-user-interface';
import { Router } from '@angular/router';
import { SignupUserService } from './signup-user.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../util/token-storage.service';
import { CustomValidators } from '../../tools/custom-validator';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: []
})
export class SignupUserComponent implements OnInit {

  constructor(private tokenstorageService : TokenStorageService, 
              private signupUserService : SignupUserService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  
  //variables
  message: any;
  verificar = false;
  verificar2 = false; 

  //fin variables
  
  public userSignupForm = this.fb.group({    
    nombreUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+( [a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+)*)")
    ])),
    
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ])),

    apellidoUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+( [a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+)*)")
    ])),

    emailUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    
    passwordUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { passwordnumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {passworduppercase: true}),
      CustomValidators.patternValidator(/[a-z]/, {passwordsmallcase: true}),
      CustomValidators.patternValidator(/[@#$:\^%&*]/, {passwordspecialcharacter: true})
    ])),

  });

  SignupUsuario() : void{
    var usuario: UserSignup = {
      nombreUsuario: this.userSignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.userSignupForm.controls['apellidoUsuario'].value,
      usernameUsuario: this.userSignupForm.controls['usernameUsuario'].value,
      emailUsuario: this.userSignupForm.controls['emailUsuario'].value,
      passwordUsuario: this.userSignupForm.controls['passwordUsuario'].value
    }    

    this.signupUserService.SignUpUser(usuario).subscribe(
      data => {
        this.verificar2 = true; 
        this.message = data.message;
        console.log(data)
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
