function lowerFirst (string) {
  if (typeof (string) !== 'string') {
    return '' + string
  }

  return string && string[0].toLowerCase() + string.slice(1)
}

module.exports = { lowerFirst }
