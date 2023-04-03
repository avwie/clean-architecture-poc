import { say } from 'cowsay'

export function isEven (n: number): boolean {
  console.log(say({ text: 'Hello' }))
  return n % 2 === 0
}
