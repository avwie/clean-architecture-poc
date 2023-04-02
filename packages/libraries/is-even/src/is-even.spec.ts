import { isEven } from './is-even'

describe('isEven', () => {
  it('should return true if the number is even', () => {
    expect(isEven(2)).toBe(true)
  })
})
