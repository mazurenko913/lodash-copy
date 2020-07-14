const { multiply } = require('./index')

it('should multiply two numbers.', () => {
  expect(multiply(2, 2)).toEqual(4)
  expect(multiply(4, -2)).toEqual(-8)
  expect(multiply(4, [2])).toEqual(8)
})

it('should ignore numbers, if they more then 2.', () => {
  expect(multiply(1, 2, 4)).toEqual(2)
  expect(multiply(5, -2, 1)).toEqual(-10)
})

it('should return NaN, if one of argument is not a number.', () => {
  expect(multiply(4, 'a')).toEqual(NaN)
  expect(multiply(4, NaN)).toEqual(NaN)
  expect(multiply('a', 'a')).toEqual(NaN)
  expect(multiply('a', { a: 1 })).toEqual(NaN)
})
