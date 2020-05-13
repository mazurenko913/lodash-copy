const { initial } = require('./index')

it('should return the array without last element', () => {
  const testArray = [1, 2, 3, 4]
  expect(initial(testArray)).toEqual([1, 2, 3])
})

it('should return undefined if argument is not array', () => {
  expect(initial(123)).toBe(undefined)
  expect(initial('string')).toBe(undefined)
})
