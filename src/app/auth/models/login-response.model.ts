import { Ciudadano } from './ciudadano.model';

export class LoginResponse {
  access_token!: string;
  ciudadano!: Ciudadano;
}
