import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { CustomValidators } from '../../tools/custom-validator';
import { PasswordService } from '../password.service';
@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: []
})

export class RestorePasswordComponent implements OnInit {
  token: any;

  constructor(private tokenstorageService : TokenStorageService, 
              private passwordService : PasswordService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  
  //variables
  verificar = false;
  verificar2 = false;
  message: any;
  //Fin variables
  
  public updateCorreoForm = this.fb.group({    
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { passwordnumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {passworduppercase: true}),
      CustomValidators.patternValidator(/[a-z]/, {passwordsmallcase: true}),
      CustomValidators.patternValidator(/[@#$:\^%&]/, {passwordspecialcharacter: true})
    ])),
  });


  RestaurarContra():void{
    //local
    this.token = location.href.slice(39); 
    console.log(this.token)

    //producción     https://dessmo-1a622.web.app/signup/admin/:token
    //this.token = location.href.slice(42); 

    var email: any = {
      utilityToken: this.token,
      passwordUsuario: this.updateCorreoForm.controls['password'].value      
    }    

    
    this.passwordService.ActualizarPassword(email).subscribe(
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
