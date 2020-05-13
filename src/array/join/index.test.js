const { join } = require('./index')

it('should converts all elements in array into a string', () => {
  const testArray = ['1', '2', '3', '4']
  expect(join(testArray)).toEqual('1,2,3,4')
})

it('should converts all elements in array into a string separated by separator "-"', () => {
  const testArray = ['1', '2', '3', '4']
  expect(join(testArray, '-')).toEqual('1-2-3-4')
})

it('should return undefined if argument is not array', () => {
  expect(join(123)).toBe(undefined)
  expect(join('string')).toBe(undefined)
})
