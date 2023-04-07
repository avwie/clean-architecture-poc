import { UseCase } from '@avwie/decorators/src'
import { AccountsDao } from '../dao/accounts.dao'

@UseCase()
export class RemoveAccountUseCase {
  constructor (private readonly accountsDao: AccountsDao) {
  }
}
