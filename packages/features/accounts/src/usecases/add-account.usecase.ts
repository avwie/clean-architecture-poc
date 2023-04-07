import { UseCase } from '@avwie/decorators/dist'
import { type Account } from '../types'
import { AccountModel } from '../models'
import { InjectModel } from '@nestjs/sequelize'
import { v4 as uuid } from 'uuid'

@UseCase()
export class AddAccountUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {}

  async invoke (input: Omit<Account, 'id'>): Promise<Account> {
    return await this.accountModel.create({
      id: uuid(),
      ...input
    })
  }
}
