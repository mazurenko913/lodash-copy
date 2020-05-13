function join (array, sep) {
  if (!Array.isArray(array)) {
    return undefined
  }
  let str = ''
  for (let i = 0; i < array.length; i++) {
    str += array[i] + sep
  }
  return str.slice(0, -1)

  // return array.join(sep)
}

module.exports = { join }
