import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
