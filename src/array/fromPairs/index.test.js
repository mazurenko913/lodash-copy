const { fromParis } = require('./index')

it('should return an object composed from key-value pairs', () => {
  expect(fromParis([['a', 1], ['b', 2]])).toStrictEqual({ a: 1, b: 2 })
})

it('should return an object were kay is not a string', () => {
  expect(fromParis([[2, 1], [undefined, 2], [NaN, 3]])).toStrictEqual({ 2: 1, undefined: 2, NaN: 3 })
})

it('should return an object were kay is object or array', () => {
  expect(fromParis([[[], 7], [{}, 'a'], [[2], 4]])).toStrictEqual({ '': 7, '[object Object]': 'a', 2: 4 })
})

it('should return an object were values more then 2', () => {
  expect(fromParis([['a', 5, 4], ['b', 6, 3]])).toStrictEqual({ a: 5, b: 6 })
})

it('should return an object were values less then 2', () => {
  expect(fromParis([['a'], ['b']])).toStrictEqual({ a: undefined, b: undefined })
})
