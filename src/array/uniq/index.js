function pull (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  const newArr = array.filter((value, index, self) => self.indexOf(value) === index)
  console.log(newArr)
  return newArr
}
module.exports = { pull }
