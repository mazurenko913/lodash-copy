const { isSymbol } = require('./index')

it('should checks if type of value is symbol.', () => {
  const sym = Symbol('abc')
  expect(isSymbol(sym)).toEqual(true)
})

it('should return false if value is classified not as symbol.', () => {
  expect(isSymbol(1)).toEqual(false)
  expect(isSymbol(['abc'])).toEqual(false)
  expect(isSymbol(NaN)).toEqual(false)
  expect(isSymbol(null)).toEqual(false)
  expect(isSymbol(undefined)).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  const sym = Symbol([1, 2, 3])
  expect(isSymbol(sym, NaN)).toEqual(true)
  expect(isSymbol(false, sym)).toEqual(false)
})
