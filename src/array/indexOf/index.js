function indexOf (array, value) {
  if (!Array.isArray(array)) {
    return undefined
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log(i)
      return i
    }
  }
}
module.exports = { indexOf }
