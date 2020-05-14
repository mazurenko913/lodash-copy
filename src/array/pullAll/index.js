function pullAll (array, delateArray) {
  if (!Array.isArray(array)) {
    return undefined
  }

  array = array.filter(item => !delateArray.includes(item))
  console.log(array)
  return array
}
module.exports = { pullAll }
