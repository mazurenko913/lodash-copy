const { subtract } = require('./index')

it('should subtract two numbers.', () => {
  expect(subtract(7, 3)).toEqual(4)
  expect(subtract(0, -2)).toEqual(2)
})

it('should return NaN, if one of argument is not a number ', () => {
  expect(subtract(4, 'a')).toEqual(NaN)
  expect(subtract(4, NaN)).toEqual(NaN)
  expect(subtract('a', 'a')).toEqual(NaN)
  expect(subtract('a', { a: 1 })).toEqual(NaN)
})

it('should ignore numbers, if they more then 2.', () => {
  expect(subtract(5, 3, 4)).toEqual(2)
  expect(subtract(10, 2, 1)).toEqual(8)
})
