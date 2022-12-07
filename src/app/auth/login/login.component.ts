import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  password = '';
  email = '';

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly toast: ToastService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    console.log('Is logged in?', this.authService.isLoggedIn());
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (result) => {
        this.userService.ciudadano = result.ciudadano;
        this.toast.message('Bienvenido');
        this.router.navigate(['/admin/profile'], {
          replaceUrl: true,
          relativeTo: null,
        });
      },
      error: (error) => {
        let message = error.error?.message;
        if (error.error?.message && typeof error.error.message === 'object') {
          message = error.error?.message.join(', \n');
        }
        this.toast.message(message || 'Error al iniciar sesión', 'Ok', 5000);
        console.log(error);
      },
    });
  }
}
