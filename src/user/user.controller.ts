import { Controller, Get } from '@nestjs/common';
import { User, UserStore } from 'src/core/userStore';

@Controller('/user')
export class UserController {
  constructor(private userStore: UserStore) {}
  @Get()
  getuser(): User[] {
    return this.userStore.get();
  }
}
