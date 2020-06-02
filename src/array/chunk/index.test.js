const { chunk } = require('./index')

it('should return an array of elements split into groups the length of size.', () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
  expect(chunk(['a', 1, [2], null, 'c', undefined, 'd'], 3)).toEqual([['a', 1, [2]], [null, 'c', undefined], ['d']])
})

it('should return an array of elements if length of size equal or bigger then array length', () => {
  expect(chunk([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]])
  expect(chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']])
})

it('should return an empty array if length of size is negative', () => {
  expect(chunk([1, 2, 3, 4], -1)).toEqual([])
})

it('should return undefined if argument is not array', () => {
  expect(chunk(123)).toBe(undefined)
  expect(chunk('string')).toBe(undefined)
})
