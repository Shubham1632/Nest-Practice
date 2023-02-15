import { Controller, Get } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Get()
  getuser(): string {
    return 'Hello user';
  }
}
