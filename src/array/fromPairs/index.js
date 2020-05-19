function fromParis (array) {
  // if (!Array.isArray(array)) {
  //   return undefined
  // }

  return array.reduce((acc, el) => ({ ...acc, [el[0]]: el[1] }), {})
}
module.exports = { fromParis }
