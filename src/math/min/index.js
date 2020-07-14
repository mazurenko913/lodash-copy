function min (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length > 0) {
    return undefined
  }

  if (array.includes(NaN, undefined)) {
    return undefined
  }

  return Math.min(...array)
}
module.exports = { min }
