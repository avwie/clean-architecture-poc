import { Body, Controller, Delete, Post } from '@nestjs/common'
import { CreateAccountUseCase, RemoveAccountUseCase } from '../usecases'
import { type Account } from '../types'

@Controller('account')
export class AccountController {
  constructor (
    private readonly createAccountUseCase: CreateAccountUseCase,
    private readonly removeAccountUseCase: RemoveAccountUseCase
  ) {
  }

  @Post()
  async addAccount (@Body() account: Account): Promise<Account> {
    return await this.createAccountUseCase.invoke(account)
  }

  @Delete()
  async removeAccount (accountId: Pick<Account, 'id'>): Promise<number> {
    return await this.removeAccountUseCase.invoke(accountId)
  }
}
