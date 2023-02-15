import { authDTO } from './authDTO/auth.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from './auth';

@Controller('auth')
export class AuthController {
  constructor(private authSevice: Auth) {}
  @Post('/signup')
  signup(@Body() authbody: authDTO): authDTO {
    return this.authSevice.signin(authbody);
  }
}
