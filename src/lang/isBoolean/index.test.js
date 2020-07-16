const { isBoolean } = require('./index')

it('should checks if value is classified as a boolean.', () => {
  expect(isBoolean(true)).toEqual(true)
  expect(isBoolean(false)).toEqual(true)
})

it('should return false if value is classified not as a boolean.', () => {
  expect(isBoolean(1)).toEqual(false)
  expect(isBoolean(NaN)).toEqual(false)
  expect(isBoolean({ Q: 123 })).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isBoolean(true, NaN)).toEqual(true)
  expect(isBoolean(false, 123)).toEqual(true)
})
