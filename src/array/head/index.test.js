const { head } = require('./index')

it('should return the first element of array', () => {
  const testArray = [1, 2, 3, 4]

  expect(head(testArray)).toBe(1)
})

it('should return undefined if argument is not array', () => {
  expect(head(123)).toBe(undefined)
  expect(head('string')).toBe(undefined)
})
