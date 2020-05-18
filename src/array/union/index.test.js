const { union } = require('./index')

it('should creates array were only unique values is kept, from all given arrays', () => {
  expect(union([1, 2, 3], [3, 4], [5, 1], 8)).toEqual([1, 2, 3, 4, 5, 8])
  expect(union(['a', 'b'], ['c', 'a', 'b'], ['c', 't'])).toEqual(['a', 'b', 'c', 't'])
  expect(union(['a', 1, 'b'], ['b', 2, 3, undefined], ['c', 2])).toEqual(['a', 1, 'b', 2, 3, undefined, 'c'])
})

it('should  not delate any items if input array is uniq', () => {
  expect(union([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  expect(union(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  expect(union(['a', 1], ['b', 2], ['c', 3])).toEqual(['a', 1, 'b', 2, 'c', 3])
})

// it('should remove element if argument is not array', () => {
//   expect(union(123)).toBe(undefined)
//   expect(union('string')).toBe(undefined)
// })
