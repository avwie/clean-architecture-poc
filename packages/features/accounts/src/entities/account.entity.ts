import { type Account } from '../types'
import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { AccountRepository } from '../repositories/account.repository'
import { v4 as uuid } from 'uuid'

@Entity({
  tableName: 'accounts',
  customRepository: () => AccountRepository
})
export class AccountEntity implements Account {
  @PrimaryKey({ fieldName: 'id' })
    id: string = uuid()

  @Property({ fieldName: 'name' })
    name!: string

  @Property({ fieldName: 'starting_balance' })
    startingBalance!: number
}
