function uniq (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  return array.filter((value, index, arr) => arr.indexOf(value) === index)
}
module.exports = { uniq }
