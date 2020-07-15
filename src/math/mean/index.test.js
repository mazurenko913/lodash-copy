const { mean } = require('./index')

it('should return the mean of the values in array.', () => {
  expect(mean([1, 2, 3, 4, 5])).toEqual(3)
  expect(mean([-1, -2, -3, -4, -5])).toEqual(-3)
})

it('should return NaN if value in array is not a number', () => {
  expect(mean([1, 2, 3, 'c'])).toBe(NaN)
  expect(mean(['a', 'd', 'c'])).toBe(NaN)
  expect(mean([1, 'd', undefined, [2], NaN, { a: 1 }, 2])).toBe(NaN)
})

it('should return undefined if argument is not array', () => {
  expect(mean(123)).toBe(undefined)
  expect(mean('string')).toBe(undefined)
})
