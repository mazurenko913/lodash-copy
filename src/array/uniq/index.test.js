const { uniq } = require('./index')

it('should return new array of number were only the first occurrence of each element is kept', () => {
  const testArray = [1, 2, 3, 2, 1]
  expect(uniq(testArray)).toEqual([1, 2, 3])
})

it('should return new array of string were only the first occurrence of each element is kept', () => {
  const testArray = ['a', 'b', 'c', 'a', 'b']
  expect(uniq(testArray)).toEqual(['a', 'b', 'c'])
})

it('should return new array of mixed value were only the first occurrence of each element is kept', () => {
  const testArray = ['a', 1, 'b', 2, 'a', 1, 'b', 2]
  expect(uniq(testArray)).toEqual(['a', 1, 'b', 2])
})

it('should return undefined if argument is not array', () => {
  expect(uniq(123)).toBe(undefined)
  expect(uniq('string')).toBe(undefined)
})
