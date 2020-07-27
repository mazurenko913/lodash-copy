const { filter } = require('./index')

it('should Iterate over elements of array, returning an array of all elements predicate returns truthy for', () => {
  const arr = [1, 2, 3, 4, 5]

  const resultArr = filter(arr, (value, index, collection) => {
    return value > 2
  })

  expect(resultArr).toEqual([3, 4, 5])
})

it('should Iterate over elements of array of objects, returning an array of all elements predicate returns truthy for', () => {
  const obj = { name: 'alex', age: 18, gender: 'man', arms: 'two', legs: 1 }
  const expectObj = ['alex', 18, 'man', 'two', 1]

  const resultObj = filter(obj, (value, key) => key)

  expect(resultObj).toEqual(expectObj)
})
