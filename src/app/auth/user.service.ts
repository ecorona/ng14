import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Ciudadano } from './models/ciudadano.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}
  ciudadanoObj: Ciudadano = {} as Ciudadano;
  private ciudadanoSubject: BehaviorSubject<Ciudadano> =
    new BehaviorSubject<Ciudadano>({} as Ciudadano);

  set ciudadano(ciudadano: Ciudadano) {
    this.ciudadanoObj = ciudadano;
    this.ciudadanoSubject.next(ciudadano);
  }

  get ciudadano$(): Observable<Ciudadano> {
    return this.ciudadanoSubject.asObservable();
  }

  //obtener la identidad del usuario del api
  loadUser(): Observable<Ciudadano> {
    return this.http
      .get<Ciudadano>(`${environment.apiUrl}/private-ciudadanos/mi/perfil`)
      .pipe(
        tap((ciudadano) => {
          this.ciudadano = ciudadano;
        })
      );
  }
}
