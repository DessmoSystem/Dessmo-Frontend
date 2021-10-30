import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';
import { UserSignup } from './signup-user-interface'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {
  
  private API_URL = GlobalUrl.BASE_URL + 'api/usuario/signup';

  constructor(private http: HttpClient) { }

  SignUpUser(usuario: UserSignup): Observable<any> {
    return this.http.post(
      this.API_URL,
      usuario,
      httpOptions
    );
  }
}
