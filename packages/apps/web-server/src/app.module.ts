import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { SequelizeModule } from '@nestjs/sequelize'
import { routes } from './app.routes'
import { AccountModule } from '@avwie/accounts/dist/modules'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadModels: true
    }),
    RouterModule.register(routes),
    AccountModule
  ]
})
export class AppModule {}
