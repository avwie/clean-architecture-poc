import { UseCase } from '@avwie/architecture'
import { InjectModel } from '@nestjs/sequelize'
import { AccountModel } from '../models'
import { type Account } from '../types'

@UseCase()
export class GetAccountsUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {
  }

  async invoke (): Promise<Account[]> {
    return await this.accountModel.findAll()
  }
}
