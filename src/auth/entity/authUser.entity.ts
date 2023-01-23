import { UserEntity } from '~/user'

export class AuthUserEntity extends UserEntity {
  token: string

  constructor(partial: Partial<AuthUserEntity>) {
    super(partial)
  }
}
