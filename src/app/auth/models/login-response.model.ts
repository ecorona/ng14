import { Usuario } from './usuario.model';

export class LoginResponse {
  accessToken!: string;
  usuario!: Usuario;
}
