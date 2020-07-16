function nth (array, index) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (Math.abs(index) > array.length) {
    return undefined
  }

  if (index < 0) {
    return array[array.length + index]
  }

  return array[index]
}
module.exports = { nth }
