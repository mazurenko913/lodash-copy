function isFinite (value) {
  return typeof value === 'number' && !isNaN(value) && value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY
}

module.exports = { isFinite }
