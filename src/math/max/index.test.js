const { max } = require('./index')

it('should return the maximum value of array', () => {
  expect(max([2, 8, 6, 4])).toEqual(8)
  expect(max([-2, -8, -6, -4])).toEqual(-2)
})

it('should return undefined if array is empty.', () => {
  expect(max([])).toBe(undefined)
})

it('should return undefined if array is falsey', () => {
  expect(max([1, 50, { a: 'd' }, undefined, NaN])).toEqual(undefined)
})

it('should return undefined if argument is not array', () => {
  expect(max(123)).toBe(undefined)
  expect(max('string')).toBe(undefined)
})
