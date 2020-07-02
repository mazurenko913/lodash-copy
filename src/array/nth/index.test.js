const { nth } = require('./index')

it('should return the element at index n of array.', () => {
  expect(nth(['a', 'b', 'c', 'd'], 1)).toEqual('b')
  expect(nth([1, 2, 3, 2, 1, 4, 2], 2)).toEqual(3)
  expect(nth(['a', 2, 'c', 4, 'd', undefined], 4)).toEqual('d')
})

it('If index is negative, the nth element from the end is returned.', () => {
  expect(nth([1, 2, 3, 4, 5], -2)).toEqual(4)
  expect(nth(['a', 'b', 'c', 'd'], -1)).toEqual('d')
  expect(nth(['a', [], 'c', 4, isNaN, undefined], -4)).toEqual('c')
})

it('should return undefined if index bigger then array length', () => {
  expect(nth([1, 2, 3, 4, 5], 6)).toEqual(undefined)
  expect(nth(['a', 'b', 'c', 'd'], -6)).toEqual(undefined)
})

it('should return undefined if argument is not array', () => {
  expect(nth(123)).toBe(undefined)
  expect(nth('string')).toBe(undefined)
})
