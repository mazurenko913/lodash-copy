function max (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (!array.length > 0) {
    return undefined
  }

  if (array.includes(NaN, undefined)) {
    return undefined
  }

  return Math.max(...array)
}

module.exports = { max }
