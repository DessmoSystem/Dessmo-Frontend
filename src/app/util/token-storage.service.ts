import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const POLL_KEY = 'auth-poll';

@Injectable({
    providedIn: 'root'
  })

  export class TokenStorageService {

    constructor() { }

    signOut(): void {
        window.localStorage.clear();
      }

    public saveToken(token: string): void {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    
    public getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: any): void {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
      }
    
      public getUser(): any {
        const user = window.localStorage.getItem(USER_KEY);
    
        if (user) {
          return JSON.parse(user);
        }
    
        return {};
      }

  public saveEncuesta(poll: string): void {
        window.localStorage.removeItem(POLL_KEY);
        window.localStorage.setItem(POLL_KEY, poll);
  }
    
  public getEncuesta(): string | null {
        return window.localStorage.getItem(POLL_KEY);
  }
}