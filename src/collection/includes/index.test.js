const { includes } = require('./index')

it('should checks if value is in array.', () => {
  expect(includes([1, 2, 3], 1)).toEqual(true)
  expect(includes([1, 2, 3], 4)).toEqual(false)
})

it('should check an value start fromIndex', () => {
  expect(includes([1, 2, 3, 2, 1, 4, 2], 2, 2)).toEqual(true)
})

it('should check an value from the end, if fromIndex is negative', () => {
  expect(includes([1, 2, 3, 2, 1, 3], 2, -3)).toEqual(true)
  expect(includes([1, 2, 3, 2, 1, 3], 2, -1)).toEqual(false)
})

it('should check for a substring of value, if collection is string.', () => {
  expect(includes('abcd', 'bc')).toEqual(true)
  expect(includes('abcd', 'qw')).toEqual(false)
})

it('should work only with 2 arguments, collection and value, other ignore', () => {
  expect(includes('abcd', 'bc', 1)).toEqual(true)
  expect(includes('abcd', 'b', 'a')).toEqual(true)
})

it('should checks if value is in object kays.', () => {
  expect(includes({ a: 1, b: 2 }, 1)).toEqual(true)
  expect(includes({ a: 1, b: 2 }, 3)).toEqual(false)
})

it('should check an value in object start fromIndex', () => {
  expect(includes({ a: 1, b: 2, c: 3, d: 1 }, 1, 1)).toEqual(true)
  expect(includes({ a: 1, b: 2, c: 3, d: 1 }, 2, 3)).toEqual(false)
})

it('should check an value in object from the end, if fromIndex is negative', () => {
  expect(includes({ a: 1, b: 2, c: 3, d: 1 }, 2, -3)).toEqual(true)
  expect(includes({ a: 1, b: 2, c: 3, d: 1 }, 2, -1)).toEqual(false)
})
