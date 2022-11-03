import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    console.log('Profile');
  }
  logout() {
    this.auth.logout().subscribe({
      next: (logedOut) => {
        if (logedOut) {
          this.router.navigate(['/auth/login'], {
            replaceUrl: true,
            relativeTo: null,
          });
        }
      },
    });
  }
}
