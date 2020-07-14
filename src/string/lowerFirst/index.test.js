const { lowerFirst } = require('./index')

it('should converts the first character of string to lower case.', () => {
  expect(lowerFirst('MyString')).toEqual('myString')
})

it('should return empty string, if string is empty', () => {
  expect(lowerFirst('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(lowerFirst('Aff', 'Att')).toEqual('aff')
})

it('should convert value to string, if it is not a string', () => {
  expect(lowerFirst(NaN)).toEqual('NaN')
})
