function toInteger (value) {
  if (typeof value !== 'number' || isNaN(value)) {
    value = 0
  }

  if (value === Number.POSITIVE_INFINITY) {
    return 1.7976931348623157e+308
  }

  if (value === Number.NEGATIVE_INFINITY) {
    return -1.7976931348623157e+308
  }
  return Math.trunc(value)
}
module.exports = { toInteger }
