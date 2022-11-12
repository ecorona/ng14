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
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    console.log('Is logged in?', this.authService.isLoggedIn());
  }

  fakeLogin() {
    this.authService.fakeLogin().subscribe({
      next: (result) => {
        this.router.navigate(['/admin/home'], {
          replaceUrl: true,
          relativeTo: null,
        });
      },
    });
  }
}
