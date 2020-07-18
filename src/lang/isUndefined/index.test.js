const { isUndefined } = require('./index')

it('should checks if type of value is undefined.', () => {
  expect(isUndefined(undefined)).toEqual(true)
})

it('should return false if value is classified not as undefined.', () => {
  expect(isUndefined(1)).toEqual(false)
  expect(isUndefined(['abc'])).toEqual(false)
  expect(isUndefined(NaN)).toEqual(false)
  expect(isUndefined(null)).toEqual(false)
  expect(isUndefined({ a: 1 })).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isUndefined(undefined, NaN)).toEqual(true)
  expect(isUndefined(false, undefined)).toEqual(false)
})
