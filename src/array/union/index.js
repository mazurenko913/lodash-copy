function union (firstArray, secondArray) {
  if (!Array.isArray(firstArray) && !Array.isArray(secondArray)) {
    return undefined
  }
  const newArray = firstArray.concat(secondArray)
  return newArray.filter((value, index, arr) => arr.indexOf(value) === index)
}
module.exports = { union }
