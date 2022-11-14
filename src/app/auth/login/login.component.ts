import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

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
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    console.log('Is logged in?', this.authService.isLoggedIn());
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (result) => {
        this.userService.user = result.usuario;
        this.router.navigate(['/admin/home'], {
          replaceUrl: true,
          relativeTo: null,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
