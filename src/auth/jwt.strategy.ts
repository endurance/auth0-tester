import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';

export interface JSONWebToken {
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  exp: number;
  azp: string;
  gty: string;
  permissions: string[];
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://enduranceidehen.auth0.com/.well-known/jwks.json',
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: 'http://localhost:3000',
      issuer: 'https://enduranceidehen.auth0.com/',
      algorithms: ['RS256'],
    });
  }

  public async validate(payload: JSONWebToken) {
    return {
      permissions: payload.permissions,
      auth_user_id: payload.sub,
    };
  }
}
