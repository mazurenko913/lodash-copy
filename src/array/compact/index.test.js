const { compact } = require('./index')

it('should return array were all false values removed', () => {
  const testArray = [0, 1, '', undefined, false, 2, undefined, null, 3, NaN]
  expect(compact(testArray)).toEqual([1, 2, 3])
})

it('should return undefined if argument is not array', () => {
  expect(compact(123)).toBe(undefined)
  expect(compact('string')).toBe(undefined)
})
