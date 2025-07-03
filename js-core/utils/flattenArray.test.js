import flattenArray from "./flattenArray";

describe('flattenArray', () => {
  it('flattens a deeply nested array', () => {
    const input = [1, [2, [3, [4, 5]]]];
    const output = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(output);
  });

  it('flattens a shallow nested array', () => {
    expect(flattenArray([1, [2], 3])).toEqual([1, 2, 3]);
  });

  it('returns flat array as-is', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('handles empty array', () => {
    expect(flattenArray([])).toEqual([]);
  });

  it('handles array with mixed types', () => {
    expect(flattenArray([1, ['a', [true, [null]]]])).toEqual([1, 'a', true, null]);
  });

  it('returns non-array input as-is', () => {
    expect(flattenArray(42)).toBe(42);
    expect(flattenArray('text')).toBe('text');
    expect(flattenArray({ a: 1 })).toEqual({ a: 1 });
  });
});
