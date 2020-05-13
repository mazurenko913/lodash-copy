const { union } = require('./index')

it('should creates an array of integer were only unique values is kept, from all given arrays', () => {
  const firstTestArray = [1, 2, 3]
  const secondTestArray = [3, 4]
  expect(union(firstTestArray, secondTestArray)).toEqual([1, 2, 3, 4])
})

it('should creates an array of string were only unique values is kept, from all given arrays', () => {
  const firstTestArray = ['a', 'b']
  const secondTestArray = ['c', 'a', 'b']
  expect(union(firstTestArray, secondTestArray)).toEqual(['a', 'b', 'c'])
})

it('should creates mixed array were only unique values is kept, from all given arrays', () => {
  const firstTestArray = ['a', 1, 'b']
  const secondTestArray = ['b', 2, 3]
  expect(union(firstTestArray, secondTestArray)).toEqual(['a', 1, 'b', 2, 3])
})

it('should return undefined if argument is not array', () => {
  expect(union(123)).toBe(undefined)
  expect(union('string')).toBe(undefined)
})
