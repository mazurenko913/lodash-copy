const { add } = require('./index')

it('should adds two numbers.', () => {
  expect(add(1, 3)).toEqual(4)
  expect(add(0, -2)).toEqual(-2)
})

it('if one of argument is not a number should add it too', () => {
  expect(add(1, 'a')).toEqual('1a')
  expect(add('a', NaN)).toEqual('aNaN')
  expect(add('a', [1])).toEqual('a1')
  expect(add('a', 'a')).toEqual('aa')
  expect(add('a', { a: 1 })).toEqual('a[object Object]')
})

it('if numbers more then 2, should ignore it. ', () => {
  expect(add(1, 3, 4)).toEqual(4)
  expect(add(0, -2, 1)).toEqual(-2)
})
