const { toLower } = require('./index')

it('should convert string, to lower case.', () => {
  expect(toLower('sTRing')).toEqual('string')
})

it('should return empty string, if string is empty', () => {
  expect(toLower('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(toLower('sTRinG', 'AtT')).toEqual('string')
})

it('should convert value to string and convert to lower case,', () => {
  expect(toLower(NaN)).toEqual('nan')
  expect(toLower(true)).toEqual('true')
})
