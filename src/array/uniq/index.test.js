const { pull } = require('./index')

it('should return new array were only the first occurrence of each element is kept', () => {
  const testArray = [1, 2, 3, 2, 1]
  expect(pull(testArray)).toEqual([1, 2, 3])
})

it('should return undefined if argument is not array', () => {
  expect(pull(123)).toBe(undefined)
  expect(pull('string')).toBe(undefined)
})
