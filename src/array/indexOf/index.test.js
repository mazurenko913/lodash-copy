const { indexOf } = require('./index')

it('should return the index of number at which the first occurrence of value is found in array', () => {
  expect(indexOf([1, 2, 3, 4, 5], 3)).toEqual(2)
  expect(indexOf(['a', 'b', 'c', 'd'], 'b')).toEqual(1)
  expect(indexOf(['a', 2, 'c', 4, 'd', undefined], 4)).toEqual(3)
})

it('should return undefined if argument is not array', () => {
  expect(indexOf(123)).toBe(undefined)
  expect(indexOf('string')).toBe(undefined)
})
