import { FeatureError } from '@avwie/architecture/dist/errors'

export type AccountErrorNames = 'not-found' | 'invalid-input'

export class AccountError<N extends AccountErrorNames> extends FeatureError<'accounts', N> {
  constructor (name: N, message: string) {
    super('accounts', name, message)
  }
}

export class AccountNotFoundError extends AccountError<'not-found'> {
  constructor (id: string) {
    super('not-found', `Account with id ${id} not found`)
  }
}

export class AccountInputInvalidError extends AccountError<'invalid-input'> {
  constructor (message: string) {
    super('invalid-input', message)
  }
}
