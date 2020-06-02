const { without } = require('./index')

it('should return an array were all given values are excluding', () => {
  expect(without([1, 1, 3], 1)).toEqual([3])
  expect(without(['a', 'b', 'c'], 'b')).toEqual(['a', 'c'])
  expect(without([1, 'b', 2, 'c', NaN, undefined], 1, 'b')).toEqual([2, 'c', NaN, undefined])
})

it('should return an empty array if an array has not elements', () => {
  expect(without([], 1)).toEqual([])
})

it('should return undefined if argument is not array', () => {
  expect(without(123)).toBe(undefined)
  expect(without('string')).toBe(undefined)
})
