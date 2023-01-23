import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as argon from 'argon2'

import { PrismaService } from '~/prisma'

import { UserEntity } from './entity'
import { CreateUserParams } from './interfaces'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ email, password, username }: CreateUserParams): Promise<UserEntity> {
    try {
      const hash = await argon.hash(password)
      const newUser = { email, hash, username }
      const user = await this.prisma.user.create({
        data: newUser
      })

      return new UserEntity(user)
    } catch (error) {
      throw new UnauthorizedException('Invalid Credentials.', {
        cause: new Error('Unique contstraint'),
        description: 'Cannot create User.'
      })
    }
  }
}
