function toLower (string) {
  if (typeof (string) !== 'string') {
    const lower = '' + string
    return lower.toLowerCase()
  }

  return string.toLowerCase()
}

module.exports = { toLower }
