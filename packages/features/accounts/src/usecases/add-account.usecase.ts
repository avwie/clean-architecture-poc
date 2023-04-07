import { UseCase } from '@avwie/decorators/src'
import { AccountRepository } from '../repositories'
import { type Account } from '../types'
import { type AccountEntity } from '../entities'

@UseCase()
export class AddAccountUseCase {
  constructor (private readonly accountsRepository: AccountRepository) {}

  async invoke (account: Omit<Account, 'id'>): Promise<AccountEntity> {
    const entity = this.accountsRepository.create(account)
    await this.accountsRepository.flush()
    return entity
  }
}
