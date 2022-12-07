import { Rol } from './rol';
export class Ciudadano {
  public id!: number;
  public nombres!: string;
  public apellidos!: string;
  public email!: string;
  public alias!: string;
  public telefono!: string;
  public prefijoTelefono!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public version!: number;
  public roles!: Array<Rol>;
}
