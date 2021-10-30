import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';
import { UserSignin } from '../sign-in-interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class SigninUserService {

  private API_URL = GlobalUrl.BASE_URL + 'api/usuario/signin';

  constructor(private http: HttpClient) { }

  SignInUser(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL,
      usuario,
      httpOptions
    );
  }
}
