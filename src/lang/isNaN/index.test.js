const { isNaN } = require('./index')

it('should checks if value is NaN.', () => {
  expect(isNaN(NaN)).toEqual(true)
})

it('should return false if value is not NaN.', () => {
  expect(isNaN(1)).toEqual(false)
  expect(isNaN('abc')).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isNaN(NaN, 123)).toEqual(true)
  expect(isNaN(true, NaN)).toEqual(false)
})
