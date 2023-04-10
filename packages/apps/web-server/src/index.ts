import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FeatureErrorFilter } from '@avwie/architecture/dist/exception.filter'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}

void bootstrap()
