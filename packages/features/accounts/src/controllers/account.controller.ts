import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { CreateAccountUseCase, GetAccountUseCase, DeleteAccountUseCase } from '../usecases'
import { type Account } from '../types'

@Controller('account')
export class AccountController {
  constructor (
    private readonly createAccountUseCase: CreateAccountUseCase,
    private readonly getAccountUseCase: GetAccountUseCase,
    private readonly deleteAccountUseCase: DeleteAccountUseCase
  ) {
  }

  @Post()
  async createAccount (@Body() account: Omit<Account, 'id'>): Promise<Account> {
    return await this.createAccountUseCase.invoke(account)
  }

  @Get()
  async getAccount (accountId: Account['id']): Promise<Account> {
    return await this.getAccountUseCase.byIdOrFail(accountId)
  }

  @Delete()
  async removeAccount (accountId: Account['id']): Promise<number> {
    return await this.deleteAccountUseCase.invoke(accountId)
  }
}
