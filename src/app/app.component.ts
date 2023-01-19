import { UserService } from 'src/app/auth/user.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    //al inicio de la app, si ya tenemos token, cargar el usuario de la url del api
    if (this.authService.isLoggedIn()) {
      this.userService.loadUser().subscribe();
    }
  }
}
