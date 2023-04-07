import { Controller, Get } from '@nestjs/common'
import { type Account } from '../types'
import { GetAccountsUseCase } from '../usecases'

@Controller('accounts')
export class AccountsController {
  constructor (
    private readonly getAccountsUseCase: GetAccountsUseCase
  ) {
  }

  @Get()
  async getAccounts (): Promise<Account[]> {
    return await this.getAccountsUseCase.invoke()
  }
}
