import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { PrismaService } from '~/prisma'

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async registerUser() {
    return { message: 'User registered successfully' }
  }

  async loginUser() {
    return { message: 'User logged in successfully' }
  }
}
