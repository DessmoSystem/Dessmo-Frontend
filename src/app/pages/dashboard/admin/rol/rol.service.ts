import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private API_URL = GlobalUrl.BASE_URL + 'api/usuarios/display/verify';
  private API_URL2 = GlobalUrl.BASE_URL + 'api';

  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<any> {
    return this.http.get(
      this.API_URL);    
  }
  

  CheckSolicitud(id: any): Observable<any> {
    return this.http.post(
      `${this.API_URL2}/usuario/${id}/request/allow`,      
      httpOptions); 
  }

  DenySolicitud(id: any): Observable<any> {
    return this.http.post(
      `${this.API_URL2}/usuario/${id}/request/deny`,      
      httpOptions); 
  }

  
}
