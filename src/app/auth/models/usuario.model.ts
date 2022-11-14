import { Perfiles } from './perfiles.enum';
export class Usuario {
  public id!: number;
  public nombre!: string;
  public email!: string;
  public apellido!: string;
  public activo!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public version!: number;
  public perfil?: Perfiles;
}
