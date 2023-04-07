import { type Account } from '../types'
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table({ tableName: 'accounts' })
export class AccountModel extends Model implements Account {
  @PrimaryKey
  @Column
    id!: string

  @Column({ field: 'name', allowNull: false })
    name!: string

  @Column({ field: 'starting_balance', allowNull: false })
    startingBalance!: number

  @CreatedAt
  @Column({ field: 'created_at' })
    createdAt!: Date

  @UpdatedAt
  @Column({ field: 'updated_at' })
    updatedAt!: Date
}
