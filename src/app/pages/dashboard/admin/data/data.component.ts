import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../../util/token-storage.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: []
})
export class DataComponent implements OnInit {

  constructor(private tokenstorageService : TokenStorageService, 
              private dataService : DataService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  //variables
  verificar = false;
  verificar2 = false;
  message: any;
  //Fin variables  

  currentLogo?: File;
  selectedlogo: any;
  selectedcv: any;
  currentcv?: File;
  basicInfo: any;



  CargarData(event:any):void {

    this.basicInfo = this.tokenstorageService.getUser();

    this.selectedcv = event.target.files;
    if (this.selectedcv) {
      const cv: File | null = this.selectedcv.item(0);
      if (cv) {
        this.currentcv = cv;
        this.dataService.UploadData(this.basicInfo.idUsuario, this.currentcv).subscribe(
          data => { 
            this.message = data.message;
            this.verificar = false;
            this.verificar2 = true;
            console.log(this.message)            
          },
          err => {
            this.verificar = true;
            this.verificar2 = false;
            console.log(err)           
          }
        );
      }
    }
  }

  AlertDefault(){
    this.verificar = false;
    this.verificar2 = false; 
  }

}
