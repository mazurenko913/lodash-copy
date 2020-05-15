function pullAll (array, delateArray) {
  if (!Array.isArray(array)) {
    return undefined
  }

  return array.filter(item => !delateArray.includes(item))
}
module.exports = { pullAll }
