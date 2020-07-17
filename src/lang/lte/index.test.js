const { lte } = require('./index')

it('should checks if first value is less or equal than second.', () => {
  expect(lte(3, 8)).toEqual(true)
  expect(lte(5, 5)).toEqual(true)
  expect(lte(6, 5)).toEqual(false)
  expect(lte([2], 5)).toEqual(true)
})

it('should return false, if one of value empty.', () => {
  expect(lte(3)).toEqual(false)
  expect(lte()).toEqual(false)
})

it('should check only first 2 values', () => {
  expect(lte(1, 5, 4)).toEqual(true)
  expect(lte(6, 4, 8)).toEqual(false)
})

it('should return false, if one of value is not a number.', () => {
  expect(lte(NaN, 3)).toEqual(false)
  expect(lte(NaN, NaN)).toEqual(false)
  expect(lte(NaN, 'abc')).toEqual(false)
})
