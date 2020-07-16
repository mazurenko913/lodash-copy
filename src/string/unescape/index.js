const unescapeCharacters = [
  ['&amp;', '&'],
  ['&lt;', '<'],
  ['&gt;', '>'],
  ['&quot;', '"']
]

function unescape (string) {
  if (typeof (string) !== 'string') {
    string = '' + string
  }

  unescapeCharacters.forEach((arr) => {
    string = string.replace(arr[0], arr[1])
  })

  return string
}

module.exports = { unescape }
