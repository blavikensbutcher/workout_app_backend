import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  @ApiProperty()
  fullName?: string;

  @IsString()
  @MinLength(5, { message: 'Password must be longer than 5 symbols' })
  @ApiProperty()
  password: string;
}
