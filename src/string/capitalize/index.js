function capitalize (string) {
  if (typeof (string) !== 'string') {
    return '' + string
  }

  return string && string[0].toUpperCase() + string.slice(1).toLowerCase()
}

module.exports = { capitalize }
