function min (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length) {
    return undefined
  }

  if (array.some((curr) => { return typeof curr !== 'number' && isNaN(array[curr]) })) {
    return undefined
  }

  return Math.min(...array)
}
module.exports = { min }
