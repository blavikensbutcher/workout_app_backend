import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @MinLength(5, { message: 'Password must be more than 5 symbols' })
  password: string;
}
