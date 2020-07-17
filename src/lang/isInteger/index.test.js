const { isInteger } = require('./index')

it('should checks if value is an integer.', () => {
  expect(isInteger(1)).toEqual(true)
  expect(isInteger(0)).toEqual(true)
  expect(isInteger(0.5)).toEqual(false)
  expect(isInteger(NaN)).toEqual(false)
})

it('should return false if value is infinity.', () => {
  expect(isFinite(Number.POSITIVE_INFINITY)).toEqual(false)
  expect(isFinite(Number.NEGATIVE_INFINITY)).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isInteger(1, NaN)).toEqual(true)
  expect(isInteger('a', 123)).toEqual(false)
})
