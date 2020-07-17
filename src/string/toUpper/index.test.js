const { toUpper } = require('./index')

it('should convert string, to upper case.', () => {
  expect(toUpper('sTRing')).toEqual('STRING')
})

it('should return empty string, if string is empty', () => {
  expect(toUpper('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(toUpper('sTRinG', 'AtT')).toEqual('STRING')
})

it('should convert value to string and convert to upper case,', () => {
  expect(toUpper(NaN)).toEqual('NAN')
  expect(toUpper(true)).toEqual('TRUE')
  expect(toUpper(123)).toEqual('123')
})
