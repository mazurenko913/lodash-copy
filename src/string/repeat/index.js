function repeat (string, n = 1) {
  if (typeof (string) !== 'string') {
    const rep = '' + string
    return rep.repeat(n)
  }

  if (n < 1) {
    return ''
  }

  return string && string.repeat(n)
}

module.exports = { repeat }
