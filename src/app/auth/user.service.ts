import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Perfiles } from './models/perfiles.enum';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
    //implementar
    const mockUser: Usuario = {
      nombre: 'Juan',
      email: 'juan@live.com',
      id: '1',
      perfil: Perfiles.ADMIN,
    };
    return of<Usuario>(mockUser).pipe(
      tap((usuario) => {
        this.user = usuario;
      })
    );
  }
}
