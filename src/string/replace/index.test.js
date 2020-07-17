const { replace } = require('./index')

it('should replaces matches for pattern in string with replacement.', () => {
  expect(replace('Hi Fred', 'Fred', 'Barney')).toEqual('Hi Barney')
})

it('should ignore replaces if pattern not found in string', () => {
  expect(replace('Hi Fred', 'Tor', 'Barney')).toEqual('Hi Fred')
  expect(replace('Hi Fred', NaN, 'Barney')).toEqual('Hi Fred')
})

it('should convert value to string, if string to modify is not a string', () => {
  expect(replace(NaN, 'NaN', 'Barney')).toEqual('Barney')
})

it('should convert replacement to string, if replacement not a string', () => {
  expect(replace('Hi Bob', 'Bob', NaN)).toEqual('Hi NaN')
})

it('should return empty string, if string to modify is empty', () => {
  expect(replace('', 'Fred', 'Barney')).toEqual('')
})
