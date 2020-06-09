const { drop } = require('./index')

it('should return a slice of array with n elements dropped from the beginning.', () => {
  expect(drop([1, 2, 3])).toEqual([2, 3])
  expect(drop(['a', 'b', 'c'])).toEqual(['b', 'c'])
  expect(drop([1, 'a', undefined, 'b', 'c'])).toEqual(['a', undefined, 'b', 'c'])
})

it('should return a slice of array were the number of items to reset is defined', () => {
  expect(drop([1, 2, 3], 2)).toEqual([3])
  expect(drop(['a', 'b', 'c', 'd'], 2)).toEqual(['c', 'd'])
  expect(drop([1, NaN, undefined, 'b', undefined], 3)).toEqual(['b', undefined])
})

it('should return a slice of array were the number of items to reset is bigger then length of array', () => {
  expect(drop([1, 2, 3], 5)).toEqual([])
  expect(drop(['a', 'b', 'c', 'd'], 7)).toEqual([])
  expect(drop([1, NaN, undefined, 'b', undefined], 20)).toEqual([])
})

it('should return a slice of array were the number of items to reset is negative', () => {
  expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3])
  expect(drop(['a', 'b', 'c', 'd'], -7)).toEqual(['a', 'b', 'c', 'd'])
  expect(drop([1, NaN, 'b', undefined], -10)).toEqual([1, NaN, 'b', undefined])
})

it('should return undefined if argument is not array', () => {
  expect(drop(123)).toBe(undefined)
  expect(drop('string')).toBe(undefined)
})
