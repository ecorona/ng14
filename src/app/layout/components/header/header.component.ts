import { Ciudadano } from './../../../auth/models/ciudadano.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  ciudadano: Ciudadano | undefined;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private readonly userService: UserService) {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next(true);
    this.unsubscribeAll.complete();
    console.log('Profile, desuscrito.');
  }

  ngOnInit(): void {
    this.userService.ciudadano$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((ciudadano) => {
        this.ciudadano = ciudadano;
      });
  }
}
