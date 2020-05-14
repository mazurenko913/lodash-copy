const { uniq } = require('./index')

it('should return new array were only the first occurrence of each element is kept', () => {
  expect(uniq([1, 2, 3, 2, 1])).toEqual([1, 2, 3])
  expect(uniq(['a', 'b', 'c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
  expect(uniq(['a', 1, 'b', 2, 'a', 1, 'b', 2])).toEqual(['a', 1, 'b', 2])
})

it('should return undefined if argument is not array', () => {
  expect(uniq(123)).toBe(undefined)
  expect(uniq('string')).toBe(undefined)
})
