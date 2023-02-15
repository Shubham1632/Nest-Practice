import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserStore } from './../core/userStore';
import { authDTO } from './authDTO/auth.dto';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { compare, hash } from 'bcrypt';
import { Jwt, sign } from 'jsonwebtoken';

@Injectable()
export class Auth {
  constructor(private userStore: UserStore, private jwtAuth: JwtService) {}
  async signup(authbody: authDTO): Promise<authDTO> {
    const id = randomUUID();
    const hashedPassword = await hash(authbody.password, 10);
    return this.userStore.save({
      id: id,
      email: authbody.email,
      password: hashedPassword,
    });
  }

  async signin(authBody: authDTO): Promise<string> {
    const user = this.userStore.getByEmail(authBody.email);
    if (!user) {
      return 'user not exist';
    }
    if (!(await compare(authBody.password, user.password))) {
      return 'Invalid password';
    }
    const payload = { email: authBody.email, password: authBody.password };
    return this.jwtAuth.sign(payload);
  }
}
