import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit {
  nUser: any;

  constructor(private tokenstorageService : TokenStorageService,
              private router : Router,
              private fb : FormBuilder,
              private AdminService : AdminService,
              private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.Auth();
    this.EsconderEncuesta();
    this.VerPorcentajes();
  }
  //Variables//
  basicInfo : any;
  selectValor: any;
  isVisible = true;
  isVisible2 = false;
  isVisibleEncuesta = true;
  fotoUsuario: any; 
  factorEconomico: any; 
  factorPsicologico: any; 
  factorResponsabilidadFamiliar: any; 
  factorTecnologico: any;
  expiradaso: any;  
  //Fin Variables//

  public adminForm = this.fb.group({  
  });

  
  EsconderEncuesta(){
    var a = this.tokenstorageService.getEncuesta();
    if(a == null || a == undefined){
      this.isVisibleEncuesta = true;
    }else{
      
      this.isVisibleEncuesta = false
    }
  }

  capturarValor(event:any){
    this.selectValor = event.target.value;
    this.isVisible = false;
    this.isVisible2 = true;
  }

  EnviarEncuesta():void{  

    this.tokenstorageService.getUser();
    
    this.basicInfo = this.tokenstorageService.getUser();
            
    var satisfaccion: any = {
      valorSatisfaccion: this.selectValor
    }  
    this.AdminService.SendEncuesta(this.basicInfo.idUsuario, satisfaccion).subscribe(
      data => {      
        this.isVisibleEncuesta = false;
        this.isVisible = true;
        this.isVisible2 = false;
        var a = 'false';
        this.tokenstorageService.saveEncuesta(a)
      },
      err => {        
        console.log(err)
      }
    )
  } 

  VerPorcentajes():void{  
    this.AdminService.ViewAbandono().subscribe(
      data => { 
        this.factorEconomico = data.factorEconomico+'%';
        this.factorPsicologico = data.factorPsicologico+'%';
        this.factorResponsabilidadFamiliar = data.factorResponsabilidadFamiliar+'%';
        this.factorTecnologico = data.factorTecnologico+'%';    
      },
      err => {        
        console.log(err)
      }
    )
  } 

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
      if(auth.authority == 'ROLE_ADMIN'){
        if (this.basicInfo.token != null || this.basicInfo.token != undefined ) {
          if (this.TokenExpired(this.basicInfo.token)) {
            this.expiradaso =  'expirado';
            this.Exit();
    
          } else {
            this.fotoUsuario = this.basicInfo.fotoUsuario.urlImagen; 
            this.nUser = this.basicInfo.nombreUsuario;
            this.expiradaso =  'valido';
          }
         
        } else {
          if( this.tokenstorageService.getToken() == ""){
            this.Exit();
          }      
          this.Exit();
        }
      }
  
      if(auth.authority == 'ROLE_SUPERADMIN'){
        window.location.href= 'superadmin'
      }
    }
   
    
    
  }

  Exit() {
    this.tokenstorageService.signOut();
    this.router.navigate(['/signin/administrador']);
  }

}
