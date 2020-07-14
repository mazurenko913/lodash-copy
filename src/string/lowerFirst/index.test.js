const { lowerFirst } = require('./index')

it('should converts the first character of string to lower case.', () => {
  expect(lowerFirst('MyString')).toEqual('myString')
})

it('if string is empty return it', () => {
  expect(lowerFirst('')).toEqual('')
})

it('if value more then 1 ignore it', () => {
  expect(lowerFirst('Aff', 'Att')).toEqual('aff')
})

it('if value is not a string, should convert it to string', () => {
  expect(lowerFirst(NaN)).toEqual('NaN')
})
