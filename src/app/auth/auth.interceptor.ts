import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.authService.token;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        //si es un 401 y tenemos un token, es porque el token expiró
        if (error.status === 401 && this.authService.isLoggedIn()) {
          //así que lo eliminamos
          this.authService.logout();
          //si no está en la ruta de login, lo mandamos para alla.
          this.route.url.subscribe((url) => {
            if (url[0].path !== '/login') {
              this.router.navigate(['/auth/login']);
            }
          });
        }
        return throwError(() => error);
      })
    );
  }
}
