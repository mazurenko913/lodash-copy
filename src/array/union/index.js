function union (arrays) {
  if (!Array.isArray(arrays)) {
    return undefined
  }
  const newArray = [].concat(...arrays)
  return newArray.filter((value, index, arr) => arr.indexOf(value) === index)
}
module.exports = { union }
