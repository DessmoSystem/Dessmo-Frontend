import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: []
})
export class SuperadminComponent implements OnInit {
  
  constructor(private tokenstorageService : TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.Auth();
  }  

  //Variables//
  basicInfo : any;
  expiradaso: any;
  fotoUsuario: any;

  //Fin Variables// 

  TokenExpired(token: string) {    
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry; 
  }
   
  Auth() {  
    this.basicInfo = this.tokenstorageService.getUser();

    if(this.basicInfo.idUsuario === undefined){
      window.location.href= 'index'
    }else{
      var auth = this.basicInfo.authorities[0]

      if(auth.authority == 'ROLE_USER'){
        window.location.href= 'user'
      }

      if(auth.authority == 'ROLE_ADMIN'){
        window.location.href= 'admin'
      }

      if(auth.authority == 'ROLE_SUPERADMIN'){
        if (this.basicInfo.token != null || this.basicInfo.token != undefined ) {
          if (this.TokenExpired(this.basicInfo.token)) {
            this.expiradaso =  'expirado';
            this.Exit();
    
          } else {
            this.fotoUsuario = this.basicInfo.fotoUsuario.urlImagen; 
            this.expiradaso =  'valido';
          }
        
        } else {
          if( this.tokenstorageService.getToken() == ""){
            this.Exit();
          }      
          this.Exit();
        }
      }

    }

    

    
  }

  Exit() {
    this.tokenstorageService.signOut();
    this.router.navigate(['/signin/superadmin']);
  }

}
