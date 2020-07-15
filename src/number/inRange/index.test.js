const { inRange } = require('./index')

it('should check if n is between start and up to.', () => {
  expect(inRange(2, 0, 3)).toEqual(true)
  expect(inRange(2, [0], 3)).toEqual(true)
  expect(inRange(7, 0, 6)).toEqual(false)
})

it('should swap params if start is greater than end.', () => {
  expect(inRange(2, 4, 1)).toEqual(true)
  expect(inRange(7, 9, 6)).toEqual(true)
})

it('should the end set to start if the end not specified.', () => {
  expect(inRange(2, 5)).toEqual(false)
  expect(inRange(7, 9)).toEqual(false)
})

it('should ignore arguments if they more then 3', () => {
  expect(inRange(2, 1, 6, 3)).toEqual(true)
})

it('should return false, if one of argument is not a number,', () => {
  expect(inRange('a', 2, 5)).toEqual(false)
  expect(inRange(2, NaN, 5)).toEqual(false)
  expect(inRange('a', 2, undefined)).toEqual(false)
})
