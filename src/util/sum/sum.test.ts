import sum from './sum';

describe('sum', () => {
  test('sum of 1 and 2 is 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
