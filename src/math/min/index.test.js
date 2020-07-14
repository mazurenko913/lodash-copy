const { min } = require('./index')

it('should return the minimum value of array', () => {
  expect(min([2, 8, 6, 4])).toEqual(2)
  expect(min([-2, -8, -6, -4])).toEqual(-8)
})

it('should return undefined if array is empty.', () => {
  expect(min([])).toBe(undefined)
})

it('should return undefined if array is falsey', () => {
  expect(min([1, 50, { a: 'd' }, undefined, NaN])).toEqual(undefined)
})

it('should return undefined if argument is not array', () => {
  expect(min(123)).toBe(undefined)
  expect(min('string')).toBe(undefined)
})
