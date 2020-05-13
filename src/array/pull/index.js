function pull (array, del) {
  if (!Array.isArray(array)) {
    return undefined
  }

  for (let i = 0; i < array.length; i++) {
    const index = array.indexOf(del)
    if (index !== -1) {
      array.splice(index, 1)
    }
  }

  return array
}
module.exports = { pull }
