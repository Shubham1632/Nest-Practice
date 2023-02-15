import { authDTO } from './authDTO/auth.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from './auth';

@Controller('auth')
export class AuthController {
  constructor(private authSevice: Auth) {}
  @Post('/signup')
  async signup(@Body() authbody: authDTO): Promise<authDTO> {
    return await this.authSevice.signup(authbody);
  }

  @Post('/signin')
  async signin(@Body() authBody: authDTO): Promise<string> {
    return await this.authSevice.signin(authBody);
  }
}
