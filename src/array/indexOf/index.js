function indexOf (array, value, fromIndex = 0) {
  if (!Array.isArray(array)) {
    return undefined
  }

  for (let i = 0 + fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i
    }
  }
}
module.exports = { indexOf }
