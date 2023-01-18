import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create() {
    return this.userService.create()
  }
}
