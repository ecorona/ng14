import { UserService } from 'src/app/auth/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from '../common/services/toast.service';
import { Rol } from './models/rol';

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
    if (
      this.userService.ciudadanoObj &&
      this.userService.ciudadanoObj.roles &&
      this.userService.ciudadanoObj.roles.indexOf(Rol.Administrador) > -1
    ) {
      return true;
    }
    this.toast.message('Usted no tiene el perfil requerido');
    return false;
  }
}
