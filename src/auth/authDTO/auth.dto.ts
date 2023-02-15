import { IsEmail, isNotEmpty, IsNotEmpty, MinLength } from 'class-validator';
import {} from 'class-transformer';
export class authDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
