function unescape (string) {
  if (typeof (string) !== 'string') {
    return '' + string
  }
  return string && string.replace('&amp;', '&').replace('&lt;', '<').replace('&quot;', '"').replace('&gt;', '>')
}

module.exports = { unescape }
