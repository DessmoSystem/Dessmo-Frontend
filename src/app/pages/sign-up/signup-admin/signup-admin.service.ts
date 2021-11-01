import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';
import { AdminSignup } from './signup-admin-interface'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SignupAdminService {

  private API_URL = GlobalUrl.BASE_URL + 'api/admin/signup';

  constructor(private http: HttpClient) { }

  SignUpAdmin(usuario: AdminSignup): Observable<any> {
    return this.http.put(
      this.API_URL,
      usuario,
      httpOptions
    );
  }
}
