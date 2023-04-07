import { UseCase } from '@avwie/decorators/dist'
import { AccountModel } from '../models'
import { InjectModel } from '@nestjs/sequelize'

@UseCase()
export class RemoveAccountUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {}

  async invoke (id: string): Promise<number> {
    return await this.accountModel.destroy({ where: { id } })
  }
}
