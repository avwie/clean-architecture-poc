import { type AccountsDao } from './accounts.dao'
import { type Account } from '../types/account.types'
import { DAO } from '@avwie/decorators/src'

@DAO()
export class AccountsTypeormDao implements AccountsDao {
  async addAccount (account: Omit<Account, 'id'>): Promise<Account> {
    // @ts-expect-error: This needs to be implemented yet
    return {} satisfies Account
  }

  async getAccount (id: string): Promise<Account | undefined> {
    return undefined
  }

  async removeAccount (id: string): Promise<boolean> {
    return false
  }

  async updateAccount (account: Pick<Account, 'id'> & Partial<Account>): Promise<Account> {
    // @ts-expect-error: This needs to be implemented yet
    return {} satisfies Account
  }
}
