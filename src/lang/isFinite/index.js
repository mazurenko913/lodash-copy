function isFinite (value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return false
  }

  return true
}
module.exports = { isFinite }
