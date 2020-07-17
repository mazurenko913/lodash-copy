function toString (value) {
  const zero = -0
  if (value === zero) {
    value = '-0'
  }
  if (value === null || value === undefined) {
    value = ''
  }
  return String(value)
}
module.exports = { toString }
