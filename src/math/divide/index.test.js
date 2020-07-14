const { divide } = require('./index')

it('should divide two numbers.', () => {
  expect(divide(1, 2)).toEqual(0.5)
  expect(divide(4, -2)).toEqual(-2)
  expect(divide(4, [2])).toEqual(2)
})

it('if numbers more then 2, should ignore it.', () => {
  expect(divide(1, 2, 4)).toEqual(0.5)
  expect(divide(4, -2, 1)).toEqual(-2)
})

it('if one of argument is not a number should return NaN', () => {
  expect(divide(4, 'a')).toEqual(NaN)
  expect(divide(4, NaN)).toEqual(NaN)
  expect(divide('a', 'a')).toEqual(NaN)
  expect(divide('a', { a: 1 })).toEqual(NaN)
})
