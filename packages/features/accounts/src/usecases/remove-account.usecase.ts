import { UseCase } from '@avwie/decorators/src'
import { AccountRepository } from '../repositories'

@UseCase()
export class RemoveAccountUseCase {
  constructor (private readonly accountsRepository: AccountRepository) {}

  async invoke (id: string): Promise<void> {
    const entity = await this.accountsRepository.findOne(id)
    if (entity == null) {
      throw new Error(`Account with id ${id} not found`)
    }
    this.accountsRepository.remove(entity)
    await this.accountsRepository.flush()
  }
}
