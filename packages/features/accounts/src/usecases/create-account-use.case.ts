import { type Account } from '../types'
import { AccountModel } from '../models'
import { v4 as uuid } from 'uuid'
import { type UseCaseDefinition } from '@avwie/architecture'
import { type FactoryProvider } from '@nestjs/common'
import { getModelToken } from '@nestjs/sequelize'

export const CreateAccount = 'CREATE_ACCOUNT'

export type CreateAccountUseCaseDependencies = [typeof AccountModel]
export type CreateAccountUseCase = (input: Omit<Account, 'id'>) => Promise<Account>

const CreateAccountUseCaseDefinition: UseCaseDefinition<CreateAccountUseCaseDependencies, CreateAccountUseCase> = (accountModel: typeof AccountModel) => async (input: Omit<Account, 'id'>): Promise<Account> => {
  return await accountModel.create({
    id: uuid(),
    ...input
  })
}

export const CreateUseCaseProvider: FactoryProvider<CreateAccountUseCase> = {
  provide: `${CreateAccount}_USECASE`,
  inject: [getModelToken(AccountModel)],
  useFactory: CreateAccountUseCaseDefinition
}
