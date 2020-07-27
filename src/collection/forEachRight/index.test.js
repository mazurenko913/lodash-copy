const { forEachRight } = require('./index')

it('should iterate each element of array.', () => {
  const arr = [1, 2, 3]
  const resultArr = []

  forEachRight(arr, value => {
    resultArr.push(value)
  })
  expect(resultArr).toEqual([3, 2, 1])
})

it('should iterate each element of object.', () => {
  const obj = { a: 1, b: 2 }
  const resultObj = {}

  forEachRight(obj, (value, key) => {
    resultObj[value] = key
  })

  expect(resultObj).toEqual(obj)
})
