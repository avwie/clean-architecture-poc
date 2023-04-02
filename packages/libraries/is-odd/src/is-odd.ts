import { isEven } from "@avwie/is-even";

export function isOdd(value: number): boolean {
  return !isEven(value);
}