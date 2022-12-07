import { UserService } from 'src/app/auth/user.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { LoginResponse } from './models/login-response.model';
import { Ciudadano } from './models/ciudadano.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _tokenKey = 'token724572456245';
  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {}

  set token(token: string) {
    localStorage.setItem(this._tokenKey, token);
  }

  get token(): string {
    return localStorage.getItem(this._tokenKey) || '';
  }

  isLoggedIn(): boolean {
    return this.token?.length > 0;
  }

  //login to api with username and password
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/auth/login-ciudadano`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.token = response.access_token;
        })
      );
  }

  logout(): Observable<boolean> {
    this.token = '';
    this.userService.ciudadano = {} as Ciudadano;
    return of(true);
  }
}
