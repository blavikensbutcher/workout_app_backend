import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'decorators/auth.decorator';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Auth()
  @Get()
  findAll() {
    return this.userService.findAllUsers();
  }

  @Auth()
  @Get('u/:userId')
  findUserById(@Param('userId') userId: string) {
    return this.userService.findUserById(userId);
  }

  @Auth()
  @Patch('u/:userId')
  update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUserById(userId, updateUserDto);
  }

  @Auth()
  @Delete('u/:userId')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
