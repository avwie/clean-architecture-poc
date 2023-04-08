import { AccountModel } from '../models'
import { InjectModel } from '@nestjs/sequelize'
import { type Account } from '../types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RemoveAccountUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {}

  async invoke (id: Pick<Account, 'id'>): Promise<number> {
    return await this.accountModel.destroy({ where: { id } })
  }
}
