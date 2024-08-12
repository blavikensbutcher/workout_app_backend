import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(dto: AuthDto) {
    // const user = this.authService.validateUser();
  }

  async validateUser(dto: AuthDto) {
    const user = await this.userService.findUserByEmail(dto.email);

    if (!user) throw new NotFoundException("Email didn't exists");

    const isValid = bcrypt.compare(dto.password, user.password);

    return null;
  }
}
