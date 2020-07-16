const escapeCharacters = [
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;']
]

function escape (string) {
  if (typeof (string) !== 'string') {
    string = '' + string
  }

  escapeCharacters.forEach((arr) => {
    string = string.replace(arr[0], arr[1])
  })

  return string
}

module.exports = { escape }
