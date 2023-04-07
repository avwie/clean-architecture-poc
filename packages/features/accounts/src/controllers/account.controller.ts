import { Body, Controller, Delete, Post } from '@nestjs/common'
import { AddAccountUseCase, RemoveAccountUseCase } from '../usecases'
import { type Account } from '../types'

@Controller('account')
export class AccountController {
  constructor (
    private readonly addAccountUseCase: AddAccountUseCase,
    private readonly removeAccountUseCase: RemoveAccountUseCase
  ) {
  }

  @Post()
  async addAccount (@Body() account: Account): Promise<Account> {
    return await this.addAccountUseCase.invoke(account)
  }

  @Delete()
  async removeAccount (accountId: Pick<Account, 'id'>): Promise<number> {
    return await this.removeAccountUseCase.invoke(accountId)
  }
}
