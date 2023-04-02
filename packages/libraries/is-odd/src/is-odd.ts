import { isEven } from "@avwie/is-even";
import {} from 'cowsay';

export function isOdd(value: number): boolean {
  return !isEven(value);
}