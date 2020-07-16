const { gt } = require('./index')

it('should checks if first value is greater than second.', () => {
  expect(gt(3, 2)).toEqual(true)
  expect(gt(3, 5)).toEqual(false)
  expect(gt([6], 5)).toEqual(true)
})

it('should return false, if one of value empty.', () => {
  expect(gt(3)).toEqual(false)
  expect(gt()).toEqual(false)
})

it('should ignore value if they more then 2', () => {
  expect(gt(9, 2, 4)).toEqual(true)
  expect(gt(1, 4, 8)).toEqual(false)
})

it('should return false, if one of value is not a number.', () => {
  expect(gt(NaN, 3)).toEqual(false)
  expect(gt(NaN, NaN)).toEqual(false)
  expect(gt(NaN, 'abc')).toEqual(false)
})
