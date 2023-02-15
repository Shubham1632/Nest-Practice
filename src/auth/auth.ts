import { authDTO } from './authDTO/auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth {
  signin(authbody: authDTO): authDTO {
    return authbody;
  }
}
