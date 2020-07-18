const { toNumber } = require('./index')

it('should convert value to a string.', () => {
  expect(toNumber('5')).toEqual(5)
  expect(toNumber(true)).toEqual(1)
  expect(toNumber(false)).toEqual(0)
  expect(toNumber(null)).toEqual(0)
  expect(toNumber(['3'])).toEqual(3)
})

it('should return NaN, if value NaN, undefined or string with letter', () => {
  expect(toNumber('abc')).toEqual(NaN)
  expect(toNumber(NaN)).toEqual(NaN)
  expect(toNumber(undefined)).toEqual(NaN)
})

it('should convert only first value, other ignore.', () => {
  expect(toNumber(true, NaN)).toEqual(1)
  expect(toNumber(NaN, '1')).toEqual(NaN)
})
