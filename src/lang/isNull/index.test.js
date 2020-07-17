const { isNull } = require('./index')

it('should return true if value is null.', () => {
  expect(isNull(null)).toEqual(true)
})

it('should return false if value is not null.', () => {
  expect(isNull(1)).toEqual(false)
  expect(isNull(NaN)).toEqual(false)
  expect(isNull([1])).toEqual(false)
  expect(isNull({ Q: 123 })).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isNull(null, NaN)).toEqual(true)
  expect(isNull('abc', undefined)).toEqual(false)
})
