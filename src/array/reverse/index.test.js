const { reverse } = require('./index')

it('should return reverse array', () => {
  const testArray = [1, 2, 3, 4]
  expect(reverse(testArray)).toEqual([4, 3, 2, 1])
})

it('should return undefined if argument is not array', () => {
  expect(reverse(123)).toBe(undefined)
  expect(reverse('string')).toBe(undefined)
})
