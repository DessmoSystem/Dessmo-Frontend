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

export class GenerateAdminService {  

  private API_URL = GlobalUrl.BASE_URL + 'api/admin/signup_request';

  constructor(private http: HttpClient) { }

  EnviarCorreo(email: any): Observable<any> {
    return this.http.post(
      this.API_URL,
      email,
      httpOptions
    );
  }

}
