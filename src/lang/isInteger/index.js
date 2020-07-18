function isInteger (value) {
  return typeof value === 'number' && value === parseInt(value, 10) &&
  value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY
}
module.exports = { isInteger }
