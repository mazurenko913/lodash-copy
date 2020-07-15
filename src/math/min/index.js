function min (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length) {
    return undefined
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' && isNaN(NaN)) {
      return undefined
    }
  }

  return Math.min(...array)
}
module.exports = { min }
