const { isNil } = require('./index')

it('should return true if value is null or undefined.', () => {
  expect(isNil(null)).toEqual(true)
  expect(isNil(undefined)).toEqual(true)
})

it('should return false if value is not null or undefined.', () => {
  expect(isNil(1)).toEqual(false)
  expect(isNil(NaN)).toEqual(false)
  expect(isNil([1])).toEqual(false)
  expect(isNil({ Q: 123 })).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isNil(null, NaN)).toEqual(true)
  expect(isNil('abc', undefined)).toEqual(false)
})
