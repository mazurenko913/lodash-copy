function includes (value) {
  if (!Array.isArray(value)) {
    return [value]
  }
  return value
}

module.exports = { includes }
