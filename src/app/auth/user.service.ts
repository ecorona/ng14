import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {
    this.getIdentity().subscribe();
  }
  usuarioObj: Usuario | undefined;
  private userSubject: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(
    {} as Usuario
  );

  set user(user: Usuario) {
    this.usuarioObj = user;
    this.userSubject.next(user);
  }

  get user$(): Observable<Usuario> {
    return this.userSubject.asObservable();
  }

  //obtener la identidad del usuario del api
  getIdentity(): Observable<Usuario> {
    return this.http
      .get<Usuario>(`${environment.apiUrl}/usuarios/me/identity`)
      .pipe(
        tap((usuario) => {
          this.user = usuario;
        })
      );
  }
}
