const { subtract } = require('./index')

it('should subtract two numbers.', () => {
  expect(subtract(7, 3)).toEqual(4)
  expect(subtract(0, -2)).toEqual(2)
})

it('if one of argument is not a number should return NaN', () => {
  expect(subtract(4, 'a')).toEqual(NaN)
  expect(subtract(4, NaN)).toEqual(NaN)
  expect(subtract('a', 'a')).toEqual(NaN)
  expect(subtract('a', { a: 1 })).toEqual(NaN)
})

it('if numbers more then 2, should ignore it. ', () => {
  expect(subtract(5, 3, 4)).toEqual(2)
  expect(subtract(10, 2, 1)).toEqual(8)
})
