import { UserService } from 'src/app/auth/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Perfiles } from './models/perfiles.enum';
import { ToastService } from '../common/services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly toast: ToastService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const autorizado = this.userService.usuarioObj?.perfil === Perfiles.ADMIN;
    if (!autorizado) {
      this.toast.message('Usted no tiene el perfil requerido');
    }
    return autorizado;
  }
}
