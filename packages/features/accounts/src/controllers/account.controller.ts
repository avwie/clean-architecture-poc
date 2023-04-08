import { Body, Controller, Delete, Post } from '@nestjs/common'
import { CreateAccount, CreateAccountUseCase, RemoveAccountUseCase } from '../usecases'
import { type Account } from '../types'
import { InjectUseCase } from '@avwie/architecture'

@Controller('account')
export class AccountController {
  constructor (
    @InjectUseCase(CreateAccount) private readonly createAccount: CreateAccountUseCase,
    private readonly removeAccountUseCase: RemoveAccountUseCase
  ) {
  }

  @Post()
  async addAccount (@Body() account: Account): Promise<Account> {
    return await this.createAccount(account)
  }

  @Delete()
  async removeAccount (accountId: Pick<Account, 'id'>): Promise<number> {
    return await this.removeAccountUseCase.invoke(accountId)
  }
}
