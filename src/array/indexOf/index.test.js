const { indexOf } = require('./index')

it('should return the index of number at which the first occurrence of value is found in array', () => {
  const testArray = [1, 2, 3, 4, 5]
  expect(indexOf(testArray, 3)).toEqual(2)
})

it('should return the index of string at which the first occurrence of value is found in array', () => {
  const testArray = ['a', 'b', 'c', 'd']
  expect(indexOf(testArray, 'b')).toEqual(1)
})

it('should return undefined if argument is not array', () => {
  expect(indexOf(123)).toBe(undefined)
  expect(indexOf('string')).toBe(undefined)
})
