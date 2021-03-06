function max (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length) {
    return undefined
  }

  if (array.some(curr => typeof curr !== 'number' || isNaN(curr))) {
    return undefined
  }

  return Math.max(...array)
}

module.exports = { max }
