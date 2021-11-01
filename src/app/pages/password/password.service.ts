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

export class PasswordService {

  private API_URL = GlobalUrl.BASE_URL + 'api/restore_password/request'; 
  private API_URL2 = GlobalUrl.BASE_URL + 'api/restore_password/update'; 

  constructor(private http: HttpClient) { }
  
  EnviarCorreo(email: any): Observable<any> {
    return this.http.post(
      this.API_URL,
      email,
      httpOptions
    );
  }

  ActualizarPassword(password: any): Observable<any> {
    return this.http.put(
      this.API_URL2,
      password,
      httpOptions
    );
  }


}
