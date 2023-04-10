import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common'
import { CreateAccountUseCase, GetAccountUseCase, DeleteAccountUseCase, CreateAccountInput } from '../usecases'
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
  async createAccount (@Body() account: CreateAccountInput): Promise<Account> {
    return await this.createAccountUseCase.invoke(account)
  }

  @Get(':accountId')
  async getAccount (@Param('accountId', ParseUUIDPipe) accountId: Account['id']): Promise<Account> {
    return await this.getAccountUseCase.byIdOrFail(accountId)
  }

  @Delete(':accountId')
  async removeAccount (@Param('accountId', ParseUUIDPipe) accountId: Account['id']): Promise<number> {
    return await this.deleteAccountUseCase.invoke(accountId)
  }
}
