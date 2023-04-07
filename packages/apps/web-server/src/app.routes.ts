import { type Routes } from '@nestjs/core/router/interfaces/routes.interface'
import { AccountsModule } from '@avwie/accounts/dist/modules'

export const routes: Routes = [
  {
    path: 'api',
    children: [AccountsModule]
  }
]
