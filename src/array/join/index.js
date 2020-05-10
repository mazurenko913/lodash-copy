function join (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  // return array.join().split(',') first method

  for (var i = 0; i < array.length; i += 1) {
    array[i] = '' + array[i]
  }
  console.log(array)
  return array
}
module.exports = { join }
