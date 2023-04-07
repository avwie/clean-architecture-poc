import { EntityRepository } from '@mikro-orm/core'
import { type AccountEntity } from '../entities/account.entity'

export class AccountRepository extends EntityRepository<AccountEntity> {

}
