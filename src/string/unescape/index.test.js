const { unescape } = require('./index')

it('should converts the HTML entities &amp;, &lt;, &gt;, &quot;, in string to their corresponding characters.', () => {
  expect(unescape('i love cat &amp; &lt; &quot; &gt; dog')).toEqual('i love cat & < " > dog')
})

it('should return empty string, if string is empty', () => {
  expect(unescape('')).toEqual('')
})

it('should ignore value if they more then 1', () => {
  expect(unescape('i love cat &amp; dog', 'hi > < bob')).toEqual('i love cat & dog')
})

it('should convert value to string, if it is not a string', () => {
  expect(unescape(NaN)).toEqual('NaN')
})
