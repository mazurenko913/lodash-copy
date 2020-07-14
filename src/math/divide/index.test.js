const { divide } = require('./index')

it('should divide two numbers.', () => {
  expect(divide(1, 2)).toEqual(0.5)
  expect(divide(4, -2)).toEqual(-2)
  expect(divide(4, [2])).toEqual(2)
})

it('should ignore numbers? if they more then 2.', () => {
  expect(divide(1, 2, 4)).toEqual(0.5)
  expect(divide(4, -2, 1)).toEqual(-2)
})

it('should return NaN, if one of argument is not a number.', () => {
  expect(divide(4, 'a')).toEqual(NaN)
  expect(divide(4, NaN)).toEqual(NaN)
  expect(divide('a', 'a')).toEqual(NaN)
  expect(divide('a', { a: 1 })).toEqual(NaN)
})
