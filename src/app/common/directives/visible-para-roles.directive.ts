import { Rol } from './../../auth/models/rol';
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Ciudadano } from 'src/app/auth/models/ciudadano.model';

@Directive({
  selector: '[appVisibleParaRoles]',
})
export class VisibleParaRolesDirective implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<void> = new Subject();
  private roles: Array<Rol> = [];
  private ciudadano: Ciudadano = {} as Ciudadano;
  ocultarConSesion: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private readonly ciudadanoService: UserService,
    private readonly authService: AuthService
  ) {}

  @Input() set appVisibleParaRoles(roles: Array<Rol>) {
    this.roles = roles;
    console.log('roles recibidos', roles);
    this.evaluarRoles();
  }

  @Input() set appVisibleParaRolesOcultarConSesion(ocultarConSesion: boolean) {
    this.ocultarConSesion = ocultarConSesion;
    console.log('ocultarConSesion', ocultarConSesion);
    this.evaluarRoles();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this.ciudadanoService.ciudadano$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((ciudadano) => {
        this.ciudadano = ciudadano;
        this.evaluarRoles();
      });
  }

  evaluarRoles() {
    if (this.ocultarConSesion && this.authService.isLoggedIn()) {
      this.removeComponent();
      return;
    }
    //si no trae roles a evaluar, mostrar
    if (!this.roles?.length && !this.authService.isLoggedIn()) {
      this.showComponent();
      return;
    }
    if (
      !this.roles?.length &&
      !this.ocultarConSesion &&
      !!this.authService.isLoggedIn()
    ) {
      this.showComponent();
      return;
    }
    //si trae roles a evaluar y no hay sesión, ocultar.
    if (this.roles.length && !this.authService.isLoggedIn()) {
      this.removeComponent();
      return;
    }
    if (
      this.ciudadano &&
      this.ciudadano.roles?.length &&
      this.roles.some((e) => this.ciudadano.roles?.includes(e))
    ) {
      this.showComponent();
    } else {
      this.removeComponent();
    }
  }

  // El componente no se renderiza como un ngIf
  removeComponent(): void {
    this.viewContainerRef.clear();
  }

  // el componente se renderiza
  showComponent(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
