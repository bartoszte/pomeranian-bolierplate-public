import { sum } from './unit';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  const data2 = { one: 1 };
  expect(data).toEqual(data2);
});
