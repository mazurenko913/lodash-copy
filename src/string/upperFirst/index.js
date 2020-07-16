function upperFirst (string) {
  if (typeof (string) !== 'string') {
    const upper = '' + string
    return upper[0].toUpperCase() + upper.slice(1)
  }

  return string && string[0].toUpperCase() + string.slice(1)
}

module.exports = { upperFirst }
