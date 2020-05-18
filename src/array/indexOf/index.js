function indexOf (array, value, fromIndex = 0) {
  if (!Array.isArray(array)) {
    return undefined
  }
  if (fromIndex >= array.length) {
    return -1
  }
  if (fromIndex < 0) {
    return -1
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i
    } else if (array[i] !== value) {
      return -1
    }
  }
}
module.exports = { indexOf }
