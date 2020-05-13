const { pull } = require('./index')

it('should removes all given values from array', () => {
  const testArray = ['a', 'b', 'c', 'd']
  expect(pull(testArray, 'a', 'b')).toEqual(['c', 'd'])
})

it('should return undefined if argument is not array', () => {
  expect(pull(123)).toBe(undefined)
  expect(pull('string')).toBe(undefined)
})
