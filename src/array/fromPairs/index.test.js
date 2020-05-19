const { fromParis } = require('./index')

it('should return an object composed from key-value pairs', () => {
  expect(fromParis([['a', 1], ['b', 2]])).toStrictEqual({ a: 1, b: 2 })
})

// it('should return undefined if argument is not array', () => {
//   expect(fromParis(123)).toBe(undefined)
//   expect(fromParis('string')).toBe(undefined)
// })
