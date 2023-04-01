import { say } from 'cowsay';

export function isEven(x: number): boolean {
  return x % 2 === 0;
}

export function random(): string {
  return say({ text: 'Hello World' });
}
