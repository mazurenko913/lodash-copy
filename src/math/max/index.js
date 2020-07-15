function max (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length) {
    return undefined
  }

  if (array.some(function (curr) {
    return typeof curr !== 'number' || isNaN(curr)
  })) {
    return undefined
  }

  return Math.max(...array)
}

module.exports = { max }
