import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ToastService } from '../common/services/toast.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _tokenKey = 'token724572456245';
  constructor(
    private readonly http: HttpClient,
    private readonly toast: ToastService,
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
  login(email: string, password: string): Observable<{ authToken: string }> {
    return this.http
      .post<{ authToken: string }>(`${environment.apiUrl}/api/v1/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.toast.message('Bienvenido');
          this.token = response.authToken;
          this.userService.getIdentity().subscribe();
        })
      );
  }

  //fake login for testing
  fakeLogin(): Observable<{ authToken: string }> {
    return of({ authToken: 'fakeToken' }).pipe(
      tap((response) => {
        //obtener la identidad el usuario en este token
        this.userService.getIdentity().subscribe();
        this.toast.message('Bienvenido');
        this.token = response.authToken;
      })
    );
  }

  logout(): Observable<boolean> {
    this.token = '';
    this.toast.message('Hasta luego');
    return of(true);
  }
}
