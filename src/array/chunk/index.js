function chunk (array, chunkSize) {
  if (!Array.isArray(array)) {
    return undefined
  }
  if (chunkSize < 0) {
    return []
  }

  const newArray = []
  for (let i = 0, len = array.length; i < len; i += chunkSize) {
    newArray.push(array.slice(i, i + chunkSize))
  }
  return newArray
}
module.exports = { chunk }
