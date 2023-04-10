import { type Account } from '../types'
import { AccountModel } from '../models'
import { InjectModel } from '@nestjs/sequelize'
import { v4 as uuid } from 'uuid'
import { UseCase } from '@avwie/architecture'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateAccountInput implements Omit<Account, 'id'> {
  @IsNotEmpty()
    name!: string

  @IsNumber()
  @IsNotEmpty()
    startingBalance!: number
}

@UseCase()
export class CreateAccountUseCase {
  constructor (@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {}

  async invoke (input: CreateAccountInput): Promise<Account> {
    return await this.accountModel.create({
      id: uuid(),
      ...input
    })
  }
}
