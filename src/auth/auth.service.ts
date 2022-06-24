import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../modules/mail/mail.service';
import { FilterGetOneUser } from '../modules/user/dto/user.input';
import { UserDocument } from '../modules/user/schema/user.schema';
import { UserService } from '../modules/user/user.service';
import { LoginInput, RegisterInput } from './dto/auth.input';
import { JwtPayload } from './entities/auth.entities';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private emailService: MailService,
    private jwtService: JwtService,
  ) {}
  async signUp(input: RegisterInput): Promise<boolean> {
    if (input.password != input.confirmpassword) {
      throw new HttpException('Mật khẩu không khớp', HttpStatus.BAD_REQUEST);
    }
    const filter: FilterGetOneUser = { email: input.email };
    const userExisting = await this.userService.getOne(filter);
    if (userExisting) {
      throw new HttpException('Tài khoản đã tồn tại', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.signUp(input);
    const token = await this.emailService.generateToken(user.email);
    const urlConfirm = `${process.env.FRONT_END_URL_CONFIRM_MAIL}?token=${token}`;
    // return (await this.emailService.sendVerifyMail(user, urlConfirm))
    //   ? true
    //   : false;
    return true;
  }
  async signIn(loginInput: LoginInput): Promise<JwtPayload> {
    const user = await this.userService.login(loginInput);
    return await this.setJwt(user);
  }
  async setJwt(user: UserDocument): Promise<JwtPayload> {
    const { _id, username } = user;
    const [at, rt] = await this.getTokens(_id, username);
    user.currentHashedRefreshToken = rt;
    await user.save();
    const jwtpayload: JwtPayload = new JwtPayload();
    jwtpayload.accessToken = at;
    jwtpayload.refreshToken = rt;
    jwtpayload.payload = _id;
    jwtpayload.userInfo = user;
    return jwtpayload;
  }
  async getTokens(_id: string, username: string): Promise<any> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          _id: _id,
          username,
        },
        {
          secret: process.env.JWT_ACCESS_TOKEN_SECRET,
          expiresIn: parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME),
        },
      ),
      this.jwtService.signAsync(
        {
          _id: _id,
          username,
        },
        {
          secret: process.env.JWT_REFRESH_TOKEN_SECRET,
          expiresIn: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME),
        },
      ),
    ]);
    return [at, rt];
  }
}
