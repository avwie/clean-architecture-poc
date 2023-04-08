import { Inject } from '@nestjs/common'

export type UseCaseDependencies = any[]
export type UseCase = (...args: any[]) => Promise<any>
export type UseCaseDefinition<A extends UseCaseDependencies, U extends UseCase> = (...deps: A) => U

export function InjectUseCase (name: string): ReturnType<typeof Inject> {
  return Inject(`${name}_USECASE`)
}
