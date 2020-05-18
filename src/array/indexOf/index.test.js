const { indexOf } = require('./index')

it('should return the index of number at which the first occurrence of value is found in array', () => {
  expect(indexOf([1, 2, 3, 2, 1, 4, 2], 2, 4)).toEqual(6)
  expect(indexOf(['a', 'b', 'c', 'd'], 'b')).toEqual(1)
  expect(indexOf(['a', 2, 'c', 4, 'd', undefined], 4)).toEqual(3)
})

it('should return  -1 when fromIndex is negative, the element is not in the array or bigger than array', () => {
  expect(indexOf([1, 2, 3], 5)).toEqual(-1)
  expect(indexOf([1, 2, 3], -2)).toEqual(-1)
  expect(indexOf([1, 2, 3], 1, 5)).toEqual(-1)
})

it('should return undefined if argument is not array', () => {
  expect(indexOf(123)).toBe(undefined)
  expect(indexOf('string')).toBe(undefined)
})
