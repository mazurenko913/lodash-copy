function castArray (value) {
  if (!Array.isArray(value)) {
    return [value]
  }
  return value
}

module.exports = { castArray }
