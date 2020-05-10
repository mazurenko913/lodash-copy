function reverse (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  var newArray = []
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}
module.exports = { reverse }
