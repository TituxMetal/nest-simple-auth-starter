import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { PrismaService } from '~/prisma'
import { UserService } from '~/user'

import { AuthUserEntity } from './entity'
import type { RegisterParams, Token, TokenPayload } from './types'

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService
  ) {}

  private async createToken(payload: TokenPayload): Promise<Token> {
    const accessToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow<string>('JWT_SECRET'),
      expiresIn: this.config.getOrThrow<string>('JWT_EXPIRE')
    })

    return accessToken
  }

  async registerUser({ email, password, username }: RegisterParams): Promise<AuthUserEntity> {
    const newUser = await this.userService.create({ email, password, username })
    const token = await this.createToken({ sub: newUser.id, email: newUser.email })
    const registeredUser = new AuthUserEntity({ ...newUser, token })

    return registeredUser
  }

  async loginUser() {
    return { message: 'User logged in successfully' }
  }
}
