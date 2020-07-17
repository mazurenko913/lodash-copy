const { isObject } = require('./index')

it('should checks if value is the language type of Object.', () => {
  expect(isObject({ a: 1 })).toEqual(true)
  expect(isObject([1, 4, 2])).toEqual(true)
})

it('should return false if value is classified not as Object.', () => {
  expect(isObject(1)).toEqual(false)
  expect(isObject(NaN)).toEqual(false)
  expect(isObject(null)).toEqual(false)
  expect(isObject(undefined)).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isObject({}, NaN)).toEqual(true)
  expect(isObject(false, [1, 2])).toEqual(false)
})
