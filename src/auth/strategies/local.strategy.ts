import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validacion(username: string, password: string) {
    const user = await this.authService.validarusuario(username, password);
    if (!user) throw new UnauthorizedException('Acceso no autorizado');
    return user;
  }
}