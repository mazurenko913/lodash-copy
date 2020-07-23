const { map } = require('./index')

it('should creates a function that square all elements in array.', () => {
  const arr = [2, 3]
  const expectArr = [4, 9]
  const resultArr = map(arr, (value, index, collection) => {
    return value * value
  })
  expect(resultArr).toEqual(expectArr)
})

it('should creates a function that square all value in object', () => {
  const obj = { a: 2, b: 3, c: 4 }
  const expectObj = ['2a', '3b', '4c']

  const resultObj = map(obj, (value, key, collection) => {
    return value + key
  })
  expect(resultObj).toEqual(expectObj)
})
