const { gte } = require('./index')

it('should checks if first value is greater oe equal than second.', () => {
  expect(gte(3, 2)).toEqual(true)
  expect(gte(5, 5)).toEqual(true)
  expect(gte(3, 5)).toEqual(false)
  expect(gte([6], 5)).toEqual(true)
})

it('should return false, if one of value empty.', () => {
  expect(gte(3)).toEqual(false)
  expect(gte()).toEqual(false)
})

it('should ignore value if they more then 2', () => {
  expect(gte(9, 2, 4)).toEqual(true)
  expect(gte(1, 4, 8)).toEqual(false)
})

it('should return false, if one of value is not a number.', () => {
  expect(gte(NaN, 3)).toEqual(false)
  expect(gte(NaN, NaN)).toEqual(false)
  expect(gte(NaN, 'abc')).toEqual(false)
})
