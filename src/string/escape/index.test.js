const { escape } = require('./index')

it('Converts the characters &, <, ", > in string to their corresponding HTML entities.', () => {
  expect(escape('i love cat & < " > dog')).toEqual('i love cat &amp; &lt; &quot; &gt; dog')
})

it('should return empty string, if string is empty', () => {
  expect(escape('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(escape('Aff', 'Att')).toEqual('aff')
})

it('should convert value to string, if it is not a string', () => {
  expect(escape(NaN)).toEqual('NaN')
})
