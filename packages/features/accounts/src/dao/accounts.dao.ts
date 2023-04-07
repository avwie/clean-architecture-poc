import { type Account } from '../types/account.types'

export interface AccountsDao {
  addAccount: (account: Omit<Account, 'id'>) => Promise<Account>
  removeAccount: (id: string) => Promise<boolean>

  updateAccount: (account: Pick<Account, 'id'> & Partial<Account>) => Promise<Account>

  getAccount: (id: string) => Promise<Account | undefined>
}
