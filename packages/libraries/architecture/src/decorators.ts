import { Injectable, type InjectableOptions } from '@nestjs/common/decorators/core/injectable.decorator'

export function UseCase (options?: InjectableOptions): ClassDecorator {
  return Injectable(options)
}
