const { pullAll } = require('./index')

it('should removes all given values from array of number, accepts array of values to remove.', () => {
  const testArray = [1, 2, 3, 4, 2, 5]
  const delateArray = [2, 3]
  expect(pullAll(testArray, delateArray)).toEqual([1, 4, 5])
})

it('should removes all given values from array of string, accepts array of values to remove.', () => {
  const testArray = ['a', 'b', 'c', 'd']
  const delateArray = ['a', 'b']
  expect(pullAll(testArray, delateArray)).toEqual(['c', 'd'])
})

it('should removes all given values from mixed array, accepts array of values to remove.', () => {
  const testArray = ['a', 1, 'c', 2, 'a', 2]
  const delateArray = ['a', 2]
  expect(pullAll(testArray, delateArray)).toEqual([1, 'c'])
})


it('should return undefined if argument is not array', () => {
  expect(pullAll(123)).toBe(undefined)
  expect(pullAll('string')).toBe(undefined)
})
