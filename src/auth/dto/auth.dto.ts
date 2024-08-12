import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Min } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @Min(6, { message: 'Password must be more than 6 symbols' })
  password: string;
}
