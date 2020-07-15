function min (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length) {
    return undefined
  }

  if (array.some(function (curr) {
    return typeof curr !== 'number' && isNaN(NaN)
  })) {
    return undefined
  }

  return Math.min(...array)
}
module.exports = { min }
