import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register() {
    return this.authService.registerUser()
  }

  @Post('login')
  @HttpCode(HttpStatus.CREATED)
  login() {
    return this.authService.loginUser()
  }
}
