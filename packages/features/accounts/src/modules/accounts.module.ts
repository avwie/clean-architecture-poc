import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import * as models from '../models'
import * as useCases from '../usecases'
import * as controllers from '../controllers'

@Module({
  imports: [SequelizeModule.forFeature(Object.values(models))],
  providers: Object.values(useCases.providers),
  controllers: Object.values(controllers),
  exports: Object.values(useCases.providers)
})
export class AccountsModule {
  static models = Object.values(models)
}
