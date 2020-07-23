const { flatMap } = require('./index')

it('should creates a flattened array of values by running each element in array.', () => {
  const arr = [1, 2]
  const expectArr = [1, 1, 2, 2]
  const resultArr = []

  flatMap(arr, (value, index, collection) => {
    resultArr.push(collection[value])
    resultArr.push(collection[value])
  })
  expect(resultArr).toEqual(expectArr)
})

it('should iterate each element of object.', () => {
  const obj = { a: 4, b: 5 }
  const expectArr = [4, 4, 5, 5]
  const resultArr = []

  flatMap(obj, (value, key, collection) => {
    resultArr.push(value)
    resultArr.push(value)
  })

  expect(resultArr).toEqual(expectArr)
})
