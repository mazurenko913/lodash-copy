function replace (string, pattern, replacement) {
  if (typeof (string) !== 'string') {
    const str = '' + string
    return str.replace(pattern, replacement)
  }
  if (typeof (replacement) !== 'string') {
    const str = '' + replacement
    return string.replace(pattern, str)
  }

  if (string === '') {
    return ''
  }

  return string.replace(pattern, replacement)
}

module.exports = { replace }
