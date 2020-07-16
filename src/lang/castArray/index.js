function castArray (value) {
  if (!Array.isArray(typeof value)) {
    return [].concat(value)
  }
  return value
}

module.exports = { castArray }
