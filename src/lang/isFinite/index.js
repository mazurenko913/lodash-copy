function isFinite (value) {
  if (typeof value !== 'number' || isNaN(value) ||
  value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
    return false
  }

  return true
}

module.exports = { isFinite }
