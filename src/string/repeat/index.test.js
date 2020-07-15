const { repeat } = require('./index')

it('Repeats the given string n times.', () => {
  expect(repeat('*', 3)).toEqual('***')
  expect(repeat('abc', 2)).toEqual('abcabc')
})

// it('should return empty string, if string is empty', () => {
//   expect(lowerFirst('')).toEqual('')
// })

// it('should ignore value if they more then 1', () => {
//   expect(lowerFirst('Aff', 'Att')).toEqual('aff')
// })

// it('should convert value to string, if it is not a string', () => {
//   expect(lowerFirst(NaN)).toEqual('NaN')
// })
