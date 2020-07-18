const MAX_NUMBER = 1.7976931348623157e+308

function toInteger (value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return 0
  }

  if (value === Number.POSITIVE_INFINITY) {
    return MAX_NUMBER
  }

  if (value === Number.NEGATIVE_INFINITY) {
    return MAX_NUMBER * -1
  }
  return Math.trunc(value)
}
module.exports = { toInteger }
