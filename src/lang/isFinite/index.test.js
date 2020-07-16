const { isFinite } = require('./index')

it('should checks if value is a finite primitive number.', () => {
  expect(isFinite(1)).toEqual(true)
  expect(isFinite(-2)).toEqual(true)
})

it('should return false if value is classified not as a number.', () => {
  expect(isFinite('hi')).toEqual(false)
  expect(isFinite(false)).toEqual(false)
  expect(isFinite({ Q: 123 })).toEqual(false)
})

it('should return false if value is NaN.', () => {
  expect(isFinite(NaN)).toEqual(false)
})

it('should check only first value, other ignore.', () => {
  expect(isFinite(1, NaN)).toEqual(true)
  expect(isFinite(23, 'aaa')).toEqual(true)
})
