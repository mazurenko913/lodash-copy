const { forEach } = require('./index')

it('should iterate each element of array.', () => {
  const arr = [1, 2, 3]
  const resultArr = []

  forEach(arr, value => {
    resultArr.push(value)
  })
  expect(resultArr).toEqual(arr)
})

it('should iterate each element of object.', () => {
  const obj = { a: 1, b: 2 }
  const resultObj = {}

  forEach(obj, (value, key) => {
    resultObj[value] = key
  })

  expect(resultObj).toEqual(obj)
})
