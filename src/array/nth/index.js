function nth (array, index) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (index < 0) {
    return array[array.length + index]
  }

  if (index > array.length) {
    return undefined
  }

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      return array[i]
    }
  }
}
module.exports = { nth }
