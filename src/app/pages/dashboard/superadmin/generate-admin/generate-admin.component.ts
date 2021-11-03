import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../../util/token-storage.service';
import { GenerateAdminService } from './generate-admin.service';

@Component({
  selector: 'app-generate-admin',
  templateUrl: './generate-admin.component.html',
  styleUrls: []
})
export class GenerateAdminComponent implements OnInit {
  
  constructor(private tokenstorageService : TokenStorageService, 
              private generateAdminService : GenerateAdminService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  //variables
  verificar = false;
  verificar2 = false;
  message: any;
  //Fin variables
  
  public invitacionAdminSigninForm = this.fb.group({    
    emailUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
  });


  invitarAdmin():void{

    this.tokenstorageService.getToken();
    this.tokenstorageService.getUser();
    

    var email: any = {
      emailUsuario: this.invitacionAdminSigninForm.controls['emailUsuario'].value
    }    

    this.generateAdminService.EnviarCorreo(email).subscribe(
      data => {
        this.verificar = false;
        this.verificar2 = true; 
        this.message = data.message;
        console.log(data)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {
        this.message = err.error.message;
        this.verificar = true;  
        this.verificar2 = false;   
        console.log(err)
      }
    )
  }
    
  AlertDefault(){
    this.verificar = false;
    this.verificar2 = false; 
  }
  
}