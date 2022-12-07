import { Ciudadano } from './../../auth/models/ciudadano.model';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  ciudadano: Ciudadano | undefined;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly toast: ToastService,
    private readonly userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next(true);
    this.unsubscribeAll.complete();
    console.log('Profile, desuscrito.');
  }

  ngOnInit(): void {
    console.log('Profile, suscrito.');
    this.userService.ciudadano$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((ciudadano) => {
        this.ciudadano = ciudadano;
      });
  }

  logout() {
    this.auth.logout().subscribe({
      next: (logedOut) => {
        if (logedOut) {
          this.toast.message('Hasta luego');
          this.router.navigate(['/auth/login'], {
            replaceUrl: true,
            relativeTo: null,
          });
        }
      },
    });
  }
}
