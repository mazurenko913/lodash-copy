const { flatMap } = require('./index')

it('should creates a flattened array of values by running each element in array.', () => {
  const arr = [[1], 2, 3, [4]]

  const res = []
  flatMap(arr, (value) => {
    res.push(value)
  })

  expect(res).toEqual([1, 2, 3, 4])
})

it('should iterate each element of object.', () => {
  const obj = { a: [4], b: [5] }
  const res = []

  flatMap(obj, (value) => {
    res.push(value)
  })

  expect(res).toEqual([4, 5])
})
