import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: []
})
export class PasswordComponent implements OnInit {

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
    emailUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
  });


  SolicitarContra():void{

    this.tokenstorageService.getToken();
    this.tokenstorageService.getUser();    

    var email: any = {
      emailUsuario: this.updateCorreoForm.controls['emailUsuario'].value
    }    

    this.passwordService.EnviarCorreo(email).subscribe(
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
