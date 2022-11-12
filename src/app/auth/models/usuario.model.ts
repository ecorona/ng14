import { Perfiles } from './perfiles.enum';
export class Usuario {
  public nombre!: string;
  public email!: string;
  public id!: string;
  public perfil?: Perfiles;
}
