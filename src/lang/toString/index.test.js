const { toString } = require('./index')

it('should convert value to a string.', () => {
  expect(toString(1)).toEqual('1')
  expect(toString(NaN)).toEqual('NaN')
  expect(toString([1, 2, 3])).toEqual('1,2,3')
})

it('should convert -0 to a string.', () => {
  expect(toString(-0)).toEqual('-0')
})

it('should return empty string, if value null or undefined.', () => {
  expect(toString(null)).toEqual('')
  expect(toString(undefined)).toEqual('')
})

it('should convert only first value, other ignore.', () => {
  expect(toString(true, NaN)).toEqual('true')
  expect(toString(NaN, 123)).toEqual('NaN')
})
