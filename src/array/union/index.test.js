const { union } = require('./index')

it('should creates array were only unique values is kept, from all given arrays', () => {
  expect(union([[1, 2, 3], [3, 4], [5, 1]])).toEqual([1, 2, 3, 4, 5])
  expect(union([['a', 'b'], ['c', 'a', 'b'], ['c', 't']])).toEqual(['a', 'b', 'c', 't'])
  expect(union([['a', 1, 'b'], ['b', 2, 3], ['c', 2]])).toEqual(['a', 1, 'b', 2, 3, 'c'])
})

it('should return undefined if argument is not array', () => {
  expect(union(123)).toBe(undefined)
  expect(union('string')).toBe(undefined)
})
