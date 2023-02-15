import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth } from './auth';

@Module({
  imports: [JwtModule.register({ secret: 'secret' })],
  controllers: [AuthController],
  providers: [Auth],
})
export class AuthModule {}
