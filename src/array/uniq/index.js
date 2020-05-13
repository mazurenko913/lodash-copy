function pull (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  const newArr = array.filter((value, index, arr) => arr.indexOf(value) === index)
  return newArr
}
module.exports = { pull }
