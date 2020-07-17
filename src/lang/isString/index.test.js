const { isString } = require('./index')

it('should checks if  type of value is string.', () => {
  expect(isString('abc')).toEqual(true)
})

it('should return false if value is classified not as string.', () => {
  expect(isString(1)).toEqual(false)
  expect(isString(['abc'])).toEqual(false)
  expect(isString(NaN)).toEqual(false)
  expect(isString(null)).toEqual(false)
  expect(isString(undefined)).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isString('abc', NaN)).toEqual(true)
  expect(isString(false, 'abc')).toEqual(false)
})
