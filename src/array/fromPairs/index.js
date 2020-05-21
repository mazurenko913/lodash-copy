function fromParis (array) {
  return array.reduce((acc, el) => ({ ...acc, [el[0]]: el[1] }), {})
}
module.exports = { fromParis }
