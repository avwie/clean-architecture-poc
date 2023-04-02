import { isOdd } from './is-odd'
describe('isEven', () => {
  it('should return true if the number is odd', () => {
    expect(isOdd(1)).toBe(true)
  })
})
