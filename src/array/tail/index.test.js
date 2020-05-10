const { tail } = require('./index')

it('should return array without first element', () => {
  const testArray = [1, 2, 3, 4]
  expect(tail(testArray)).toEqual([2, 3, 4])
})

it('should return undefined if argument is not array', () => {
  expect(tail(123)).toBe(undefined)
  expect(tail('string')).toBe(undefined)
})
