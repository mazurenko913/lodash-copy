const { castArray } = require('./index')

it('should converts value as an array if it is not one.', () => {
  expect(castArray(2)).toEqual([2])
  expect(castArray('abc')).toEqual(['abc'])
  expect(castArray(NaN)).toEqual([NaN])
  expect(castArray({ a: 1 })).toEqual([{ a: 1 }])
})

it('should ignore value, if they more then 1', () => {
  expect(castArray(2, 4, NaN)).toEqual([2])
})

it('should not convert value to array if it is array ', () => {
  const arr = [2]
  expect(castArray(arr)).toBe(arr)
})
