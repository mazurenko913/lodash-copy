const { sum } = require('./index')

it('should return the sum of the numbers', () => {
  expect(sum([1, 2, 3, 4, 5])).toEqual(15)
  expect(sum([-1, -2, -3, -4, -5])).toEqual(-15)
})

it('should add arguments not integer arguments', () => {
  expect(sum([1, 2, 'a', 1])).toEqual('3a1')
  expect(sum([1, 'a', NaN])).toEqual('1aNaN')
  expect(sum(['a', [1], 5])).toEqual('a15')
  expect(sum(['a', 'a', 'b'])).toEqual('aab')
  expect(sum(['a', { a: 1 }, 1])).toEqual('a[object Object]1')
})

it('should add arguments', () => {
  expect(sum([NaN, undefined])).toEqual(NaN)
  expect(sum([NaN, NaN])).toEqual(NaN)
})

it('should return undefined if argument is not array', () => {
  expect(sum(123)).toBe(undefined)
  expect(sum('string')).toBe(undefined)
})
