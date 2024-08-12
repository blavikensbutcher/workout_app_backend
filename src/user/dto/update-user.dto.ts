import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  password?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  avatarUrl?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  fullName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  accessToken?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  refreshToken?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  isVerified?: boolean;
}
