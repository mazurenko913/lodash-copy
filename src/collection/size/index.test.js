const { size } = require('./index')

it('should return the length of array', () => {
  expect(size([1, 2, 3, 4, 5])).toEqual(5)
  expect(size(['a', 'b', 'c'])).toEqual(3)
})

it('should return the length of string', () => {
  expect(size('respect')).toEqual(7)
  expect(size('abc')).toEqual(3)
})

it('should return the length of object kays', () => {
  expect(size({ a: 1, b: 2, c: 3 })).toEqual(3)
  expect(size('abc')).toEqual(3)
})

it('should return 0, if collection is not a object, array or string', () => {
  expect(size(null)).toEqual(0)
  expect(size(123)).toEqual(0)
})
