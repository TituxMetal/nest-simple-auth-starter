import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { CreateUserDto } from './dto'
import { UserEntity } from './entity'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create({ ...dto })
  }
}
