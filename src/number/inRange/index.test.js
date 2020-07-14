const { inRange } = require('./index')

it('should check if n is between start and up to, but not including, end', () => {
  expect(inRange(2, 0, 3)).toEqual(true)
  expect(inRange(2, [0], 3)).toEqual(true)
  expect(inRange(7, 0, 6)).toEqual(false)
})

it('If start is greater than end the params are swapped to support negative ranges.', () => {
  expect(inRange(2, 4, 1)).toEqual(true)
  expect(inRange(7, 9, 6)).toEqual(true)
})

it('If end is not specified, it is set to start with start then set to 0.', () => {
  expect(inRange(2, 5)).toEqual(false)
  expect(inRange(7, 9)).toEqual(false)
})

it('If arguments more then 3 ignore it', () => {
  expect(inRange(2, 1, 6, 3)).toEqual(true)
})

it('If one of argument is not a number, should return false', () => {
  expect(inRange('a', 2, 5)).toEqual(false)
  expect(inRange(2, NaN, 5)).toEqual(false)
  expect(inRange('a', 2, undefined)).toEqual(false)
})
