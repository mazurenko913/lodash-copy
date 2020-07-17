const { capitalize } = require('./index')

it('should Convert the first character of string to upper case and the remaining to lower case.', () => {
  expect(capitalize('aDOlf')).toEqual('Adolf')
})

it('should return empty string, if string is empty', () => {
  expect(capitalize('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(capitalize('aff', 'Att')).toEqual('Aff')
})

it('should convert value to string, if it is not a string', () => {
  expect(capitalize(NaN)).toEqual('NaN')
  expect(capitalize(true)).toEqual('true')
})
