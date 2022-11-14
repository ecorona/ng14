import { UserService } from 'src/app/auth/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}
  ngOnInit(): void {
    //al inicio de la app, si ya tenemos token, cargar el usuario de la url del api
    if (this.authService.isLoggedIn()) {
      this.userService.loadUser().subscribe();
    }
  }
}
