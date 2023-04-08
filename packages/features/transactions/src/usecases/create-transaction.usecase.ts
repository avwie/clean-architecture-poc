import { UseCase } from '@avwie/architecture'
import { GetAccountUseCase } from '@avwie/accounts/dist/usecases'
import { type TransactionCreateInput } from '../types/transaction.types'

@UseCase()
export class CreateTransactionUseCase {
  constructor (
    private readonly getAccount: GetAccountUseCase
  ) {
  }

  async invoke (input: TransactionCreateInput) {
    const debtor = await this.getAccount.byIdOrFail(input.debtorId)
    const creditor = await this.getAccount.byIdOrFail(input.creditorId)
  }
}
