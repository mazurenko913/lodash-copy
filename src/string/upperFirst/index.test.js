const { upperFirst } = require('./index')

it('should converts the first character of string to upper case.', () => {
  expect(upperFirst('hello world!')).toEqual('Hello world!')
})

it('should return empty string, if string is empty', () => {
  expect(upperFirst('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(upperFirst('hi', 'bob')).toEqual('Hi')
})

it('should convert value to string and to upper case, if it is not a string', () => {
  expect(upperFirst(NaN)).toEqual('NaN')
  expect(upperFirst(true)).toEqual('True')
})
