import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit {

  constructor(private tokenstorageService : TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.Auth();
  }

  //Variables//
  basicInfo : any;
  //Fin Variables//
 

  Auth() {  

    if (this.tokenstorageService.getToken()) {
      this.basicInfo = this.tokenstorageService.getUser();
      this.basicInfo.fotoUsuario = this.basicInfo.fotoUsuario.urlImagen;
      

    } else {
      if( this.tokenstorageService.getToken() == ""){
        this.Exit();
      }
      this.Exit();
    }
  }

  Exit() {
    this.tokenstorageService.signOut();
    this.router.navigate(['/signin/administrador']);
  }

}
