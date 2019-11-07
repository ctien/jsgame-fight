const {
  add
} = require('./product.logic');

test('should 3 + 2 to equal 5', () => {
  expect(add(3, 2)).toBe(5);
});
