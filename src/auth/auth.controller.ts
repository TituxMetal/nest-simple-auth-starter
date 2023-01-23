import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { AuthService } from './auth.service'
import { RegisterDto } from './dto'
import { AuthUserEntity } from './entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: RegisterDto): Promise<AuthUserEntity> {
    return this.authService.registerUser({ ...dto })
  }

  @Post('login')
  @HttpCode(HttpStatus.CREATED)
  login() {
    return this.authService.loginUser()
  }
}
