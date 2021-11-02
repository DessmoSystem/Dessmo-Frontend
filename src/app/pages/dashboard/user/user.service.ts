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
export class UserService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';

  constructor(private http: HttpClient) { }
  SendEncuesta(id: any, sf: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}user/${id}/satisfaccion/save`,  
      sf,    
      httpOptions); 
  }

  ViewAbandono(): Observable<any> {
    return this.http.get(
      `${this.API_URL}display/motivo_abandono`,  
      httpOptions); 
  }

}
