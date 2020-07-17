const { toInteger } = require('./index')

it('should converts value to an integer.', () => {
  expect(toInteger(1.2)).toEqual(1)
  expect(toInteger(-3.4)).toEqual(-3)
})

it('should convert infinity.', () => {
  expect(toInteger(Number.POSITIVE_INFINITY)).toEqual(1.7976931348623157e+308)
  expect(toInteger(Number.NEGATIVE_INFINITY)).toEqual(-1.7976931348623157e+308)
})

it('should return 0 if value is NaN', () => {
  expect(toInteger(NaN)).toEqual(0)
})

it('should return 0 if value is classified not as a number.', () => {
  expect(toInteger('abc')).toEqual(0)
  expect(toInteger(null)).toEqual(0)
  expect(toInteger(undefined)).toEqual(0)
  expect(toInteger({ Q: 123 })).toEqual(0)
})

it('should check only first value, other ignore.', () => {
  expect(toInteger(1.2, 2.5)).toEqual(1)
  expect(toInteger(-1.2, 9.6)).toEqual(-1)
})
