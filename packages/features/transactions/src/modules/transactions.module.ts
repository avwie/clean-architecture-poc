import { Module } from '@nestjs/common'
import { AccountsModule } from '@avwie/accounts/dist/modules'

@Module({
  imports: [
    AccountsModule
  ]
})
export class TransactionsModule {}
