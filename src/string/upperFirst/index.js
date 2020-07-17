function upperFirst (string) {
  if (typeof (string) !== 'string') {
    string = '' + string
  }

  return string && string[0].toUpperCase() + string.slice(1)
}

module.exports = { upperFirst }
