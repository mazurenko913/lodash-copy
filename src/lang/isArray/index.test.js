const { isArray } = require('./index')

it('should return true if value is classified as an array.', () => {
  expect(isArray([1, 2, 3])).toEqual(true)
  expect(isArray(['a', 'b', 'c'])).toEqual(true)
  expect(isArray([true, false, 1, NaN])).toEqual(true)
})

it('should return false if the value is classified not an array.', () => {
  expect(isArray(NaN)).toEqual(false)
  expect(isArray(false)).toEqual(false)
  expect(isArray({ a: 1 })).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isArray([1, 2, 3], NaN)).toEqual(true)
})
