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

export class SigninSuperadminService {

  private API_URL = GlobalUrl.BASE_URL + 'api/superadmin/signin';

  constructor(private http: HttpClient) { }

  SignInSuperAdmin(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL,
      usuario,
      httpOptions
    );
  }

}
