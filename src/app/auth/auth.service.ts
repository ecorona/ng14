import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ToastService } from '../common/services/toast.service';
import { LoginResponse } from './models/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _tokenKey = 'token724572456245';
  constructor(
    private readonly http: HttpClient,
    private readonly toast: ToastService
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
      .post<LoginResponse>(`${environment.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.toast.message('Bienvenido');
          this.token = response.accessToken;
        })
      );
  }

  logout(): Observable<boolean> {
    this.token = '';
    this.toast.message('Hasta luego');
    return of(true);
  }
}
