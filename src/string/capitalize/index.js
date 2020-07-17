function capitalize (value) {
  if (typeof (value) !== 'string') {
    value = '' + value
  }

  return value[0].toUpperCase() + value.slice(1).toLowerCase()
}

module.exports = { capitalize }
