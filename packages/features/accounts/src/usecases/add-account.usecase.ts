import { UseCase } from '@avwie/decorators/src'
import { AccountsDao } from '../dao/accounts.dao'

@UseCase()
export class AddAccountUseCase {
  constructor (private readonly accountsDao: AccountsDao) {
  }
}
