import { UseCase } from '@avwie/architecture/dist'
import { AccountModel } from '../models'
import { InjectModel } from '@nestjs/sequelize'
import { type Account } from '../types'

@UseCase()
export class DeleteAccountUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {}

  async invoke (id: Account['id']): Promise<number> {
    return await this.accountModel.destroy({ where: { id } })
  }
}
