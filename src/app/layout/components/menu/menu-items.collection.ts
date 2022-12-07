import { Rol } from '../../../auth/models/rol';
export class MenuItem {
  label!: string;
  icon!: string;
  routerLink!: string[];
  routerLinkActive!: string;
  visibleParaRoles!: Rol[];
  ocultarConSesion!: boolean;
}
export const MenuItems: Array<MenuItem> = [
  {
    label: 'Bienvenido',
    icon: 'pi pi-fw pi-home',
    routerLink: ['/home/welcome'],
    routerLinkActive: 'font-bold',
    visibleParaRoles: [],
    ocultarConSesion: false,
  },
  {
    label: 'Inicio de Sesión',
    icon: 'pi pi-fw pi-sign-in',
    routerLink: ['/auth/login'],
    routerLinkActive: 'font-bold',
    visibleParaRoles: [],
    ocultarConSesion: true,
  },
  {
    label: 'Administración',
    icon: 'pi pi-fw pi-users',
    routerLink: ['/admin/home'],
    routerLinkActive: 'font-bold',
    visibleParaRoles: [Rol.Administrador],
    ocultarConSesion: false,
  },
  {
    label: 'Mi Perfil',
    icon: 'pi pi-fw pi-user',
    routerLink: ['/admin/profile'],
    routerLinkActive: 'font-bold',
    visibleParaRoles: [Rol.Ciudadano],
    ocultarConSesion: false,
  },
  {
    label: 'Configuración',
    icon: 'pi pi-fw pi-cog',
    routerLink: ['/admin/config'],
    routerLinkActive: 'font-bold',
    visibleParaRoles: [Rol.Administrador],
    ocultarConSesion: false,
  },
];
