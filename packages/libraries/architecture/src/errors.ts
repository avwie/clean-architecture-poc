export class FeatureError<Namespace extends string, Names extends string> extends Error {
  constructor (readonly namespace: Namespace, readonly name: Names, message: string) {
    super(message)
  }

  toJSON (): any {
    return {
      namespace: this.namespace,
      name: this.name,
      message: this.message
    }
  }
}
