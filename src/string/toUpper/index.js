function toUpper (string) {
  if (typeof (string) !== 'string') {
    const lower = '' + string
    return lower.toUpperCase()
  }

  return string.toUpperCase()
}

module.exports = { toUpper }
