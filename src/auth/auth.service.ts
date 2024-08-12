import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { Response } from 'express';
import * as process from 'process';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  REFRESH_TOKEN_NAME = process.env.REFRESH_TOKEN_NAME || 'refreshToken';

  async login(dto: AuthDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.validateUser(dto);

    const tokens = await this.issueTokens(user.id);

    await this.userService.updateUserById(user.id, {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });

    return { ...user, accessToken: tokens.accessToken };
  }

  async register(dto: AuthDto) {
    const isUserExists = await this.userService.findUserByEmail(dto.email);

    if (isUserExists) throw new ConflictException('User already registered');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userService.createUser(dto);

    const tokens = await this.issueTokens(user.id);

    return {
      ...user,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  private async validateUser(dto: AuthDto) {
    const user = await this.userService.findUserByEmail(dto.email);

    if (!user) throw new NotFoundException("Email didn't exists");

    const isValid = await bcrypt.compare(dto.password, user.password);

    if (!isValid) throw new UnauthorizedException('Email or password is wrong');

    return user;
  }

  addRefreshToken(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(
      expiresIn.getDate() + +(process.env.EXPIRES_IN_REFRESH_TOKEN || 10),
    );

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: false,
      expires: expiresIn,
      secure: false,
      sameSite: 'none',
      domain: 'localhost',
    });
  }

  removeRefreshToken(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: false,
      expires: new Date(0),
      secure: false,
      sameSite: 'none',
      domain: 'localhost',
    });
  }

  private async issueTokens(userId: string) {
    const data = { id: userId };

    const accessToken = await this.jwtService.signAsync(data, {
      expiresIn: '1h',
    });

    const refreshToken = await this.jwtService.signAsync(data, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwtService.verifyAsync(refreshToken);
    if (!result) throw new UnauthorizedException('Invalid refresh token');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await this.userService.findUserById(result.id);

    const tokens = await this.issueTokens(user?.id || '1234');

    return {
      user,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }
}
