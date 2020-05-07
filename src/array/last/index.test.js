const { last } = require('./index')

it('should return the last element of array', () => {
  const testArray = [1, 2, 3, 4]

  expect(last(testArray)).toBe(4)
})

it('should return undefined if argument is not array', () => {
  expect(last(123)).toBe(undefined)
  expect(last('string')).toBe(undefined)
})
