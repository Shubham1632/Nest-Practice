import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule, CoreModule, JwtModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
