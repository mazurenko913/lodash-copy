const { pull } = require('./index')

it('should removes all given values from array ', () => {
  const testArray = ['a', 'b', 'c', 'a', 'b', 'c']
  expect(pull(testArray)).toEqual(['b', 'b'])
})

// it('should return undefined if argument is not array', () => {
//   expect(pull(123)).toBe(undefined)
//   expect(pull('string')).toBe(undefined)
// })
