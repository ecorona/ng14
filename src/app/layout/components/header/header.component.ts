import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Usuario } from 'src/app/auth/models/usuario.model';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: Usuario | undefined;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private readonly userService: UserService) {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next(true);
    this.unsubscribeAll.complete();
    console.log('Profile, desuscrito.');
  }

  ngOnInit(): void {
    this.userService.user$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((user) => {
        this.user = user;
      });
  }
}
