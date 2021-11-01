import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../../util/token-storage.service';
import { RolService } from './rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: []
})
export class RolComponent implements OnInit {
 

  constructor(private tokenstorageService : TokenStorageService, 
              private rolService : RolService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.MostrarSolicitudes();
  }

  //variables
  verificar = false;
  verificar2 = false;
  message: any;
  CurrentLista: any;
  ListSolicitud: any;
  //Fin variables
  
  MostrarSolicitudes():void{  

    this.rolService.getSolicitudes().subscribe(
      data => {      
        this.CurrentLista = data;
        console.log(this.CurrentLista)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {        
        console.log(err)
      }
    )
  }

  SeleccionarSolicitud(list:any) {
    this.ListSolicitud = list;
    console.log(this.ListSolicitud.idUsuario)
  }

  AprobarSolicitud(){  

    this.rolService.CheckSolicitud(this.ListSolicitud.idUsuario).subscribe(
      data => {      
        console.log(data)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {        
        console.log(err)
      }
    )
  }  
  
  DenegarSolicitud(){  

    this.rolService.DenySolicitud(this.ListSolicitud.idUsuario).subscribe(
      data => {      
        console.log(data)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {        
        console.log(err)
      }
    )
  }


}
