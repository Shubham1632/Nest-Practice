import { UserStore } from './userStore';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [UserStore],
  exports: [UserStore],
})
export class CoreModule {}
