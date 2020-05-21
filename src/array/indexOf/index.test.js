const { indexOf } = require('./index')

it('should return the index of number at which the first occurrence of value is found in array', () => {
  expect(indexOf([1, 2, 3, 2, 1, 4, 2], 2)).toEqual(1)
  expect(indexOf(['a', 'b', 'c', 'd'], 'b')).toEqual(1)
  expect(indexOf(['a', 2, 'c', 4, 'd', undefined], 4)).toEqual(3)
})

it('should return -1 when an element is not in the array', () => {
  expect(indexOf([1, 2, 3], 6)).toEqual(-1)
  expect(indexOf(['a', 'b', 'c', 'd'], 'y')).toEqual(-1)
  expect(indexOf(['a', 2, 'c', 4, 'd', null], undefined)).toEqual(-1)
})

it('should find an element start from index', () => {
  expect(indexOf([1, 2, 3, 2, 1, 4, 2], 2, 2)).toEqual(3)
})

it('should return -1 when fromIndex is negative', () => {
  expect(indexOf([1, 2, 3], -5)).toEqual(-1)
})

it('should return -1 if fromIndex is not a number', () => {
  expect(indexOf([1, 2, 3], 'a')).toEqual(-1)
})

it('should return -1 when fromIndex bigger than array', () => {
  expect(indexOf([1, 2, 3], 1, 5)).toEqual(-1)
})

it('should return undefined if argument is not array', () => {
  expect(indexOf(123)).toBe(undefined)
  expect(indexOf('string')).toBe(undefined)
})
