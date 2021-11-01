import { Component, OnInit } from '@angular/core';
import { SignupUserService } from '../signup-user.service';
import { TokenStorageService } from '../../../../util/token-storage.service';

@Component({
  selector: 'app-signup-user-verify',
  templateUrl: './signup-user-verify.component.html',
  styleUrls: []
})
export class SignupUserVerifyComponent implements OnInit {

  constructor(private tokenstorageService : TokenStorageService, 
              private signupUserService : SignupUserService
              ) { }

  ngOnInit(): void {
    this.UserVerify();
  }

  //Variables
  message: any;
  token: any;
  //Fin Variables

  //local
  //this.token = location.href.slice(44); 
  //producción     https://dessmo-1a622.web.app/signup/admin/:token
  //this.token = location.href.slice(51); 

  UserVerify() : void{

    var token: any = {
      utilityToken: this.token = location.href.slice(44)
    }    

    this.signupUserService.VerifyUser(token).subscribe(
      data => {
        this.message = data.message;
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {
        this.message = err.error.message;
        console.log(err)
      }
    )
  }

}
