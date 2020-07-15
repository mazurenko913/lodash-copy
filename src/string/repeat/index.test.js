const { repeat } = require('./index')

it('Repeats the given string n times.', () => {
  expect(repeat('*', 3)).toEqual('***')
  expect(repeat('abc', 2)).toEqual('abcabc')
})

it('should return empty string, if repeats number less then 1', () => {
  expect(repeat('abc', 0)).toEqual('')
  expect(repeat('abc', -2)).toEqual('')
})

it('should return empty string, if string is empty', () => {
  expect(repeat('')).toEqual('')
})

it('should return empty string if string more then 2', () => {
  expect(repeat('abc', 'cba', 3)).toEqual('')
})

it('should convert value to string, if it is not a string', () => {
  expect(repeat(NaN, 3)).toEqual('NaNNaNNaN')
  expect(repeat(true, 3)).toEqual('truetruetrue')
})
