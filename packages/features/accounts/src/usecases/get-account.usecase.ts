import { UseCase } from '@avwie/architecture'
import { InjectModel } from '@nestjs/sequelize'
import { AccountModel } from '../models'
import { type Account } from '../types'
import { AccountNotFoundError } from '../errors/account.error'

@UseCase()
export class GetAccountUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {
  }

  async byId (id: Account['id']): Promise<Account | null> {
    return await this.accountModel.findByPk(id)
  }

  async byIdOrFail (id: Account['id']): Promise<Account> {
    const account = await this.byId(id)
    if (account == null) {
      throw new AccountNotFoundError(id)
    }
    return account
  }
}
