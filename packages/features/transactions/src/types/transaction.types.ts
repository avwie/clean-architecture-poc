import { type Account } from '@avwie/accounts/dist/types'

export interface Transaction {
  id: string
  amount: number

  debtor: Account

  creditor: Account
}

export interface TransactionCreateInput extends Omit<Transaction, 'debtor' | 'creditor'> {
  debtorId: Account['id']
  creditorId: Account['id']
}
