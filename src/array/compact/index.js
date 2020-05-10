function compact (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  // return array.filter(Boolean) first method
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0 || Number.isNaN(array[i]) || array[i] == null || array[i] === false || array[i] === '' || array[i] === undefined) {
      array.splice(i, 1)
      i--
    }
  }
  return array
}
module.exports = { compact }
