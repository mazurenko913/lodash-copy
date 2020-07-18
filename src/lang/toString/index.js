function toString (value) {
  const zeroMinus = -0
  if (value === zeroMinus) {
    return '-0'
  }
  if (value === null || value === undefined) {
    return ''
  }
  return String(value)
}
module.exports = { toString }
