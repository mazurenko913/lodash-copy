const { isNumber } = require('./index')

it('should checks if value is classified as a Number primitive or object.', () => {
  expect(isNumber(123)).toEqual(true)
  expect(isNumber(NaN)).toEqual(true)
  expect(isNumber(Number.NEGATIVE_INFINITY)).toEqual(true)
  expect(isNumber(Number.MIN_VALUE)).toEqual(true)
})

it('should return false if value not classified as a Number', () => {
  expect(isNumber('abc')).toEqual(false)
  expect(isNumber(undefined)).toEqual(false)
  expect(isNumber({ Q: 123 })).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isNumber(NaN, 'abc')).toEqual(true)
  expect(isNumber(undefined, 144)).toEqual(false)
})
