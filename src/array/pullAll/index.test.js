const { pullAll } = require('./index')

it('should removes all given values from array, accepts array of values to remove.', () => {
  expect(pullAll([1, 2, 3, 4, 2, 5], [2, 3])).toEqual([1, 4, 5])
  expect(pullAll(['a', 'b', 'c', 'd'], ['a', 'b'])).toEqual(['c', 'd'])
  expect(pullAll(['a', 1, 'c', 2, 'a', 2, undefined, [5, 6]], ['a', 2])).toEqual([1, 'c', undefined, [5, 6]])
})

it('should return undefined if argument is not array', () => {
  expect(pullAll(123)).toBe(undefined)
  expect(pullAll('string')).toBe(undefined)
})
