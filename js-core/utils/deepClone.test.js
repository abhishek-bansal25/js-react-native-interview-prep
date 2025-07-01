import deepClone from './deepClone.js';

function runTests() {
  const tests = [
    {
      name: 'Clones a simple object',
      input: { a: 1, b: 2 },
      modify: (cloned) => (cloned.a = 100),
      expectedOriginalValue: 1,
      extract: (original) => original.a,
    },
    {
      name: 'Clones a nested object',
      input: { a: { b: { c: 3 } } },
      modify: (cloned) => (cloned.a.b.c = 999),
      expectedOriginalValue: 3,
      extract: (original) => original.a.b.c,
    },
    {
      name: 'Clones an array',
      input: [1, 2, 3],
      modify: (cloned) => (cloned[0] = 100),
      expectedOriginalValue: 1,
      extract: (original) => original[0],
    },
    {
      name: 'Clones nested arrays/objects',
      input: [{ a: 1 }, { b: [2, 3] }],
      modify: (cloned) => (cloned[1].b.push(999)),
      expectedOriginalValue: 2,
      extract: (original) => original[1].b[0],
    },
  ];

  for (const { name, input, modify, expectedOriginalValue, extract } of tests) {
    const original = structuredClone(input); // make a true copy for comparison
    const cloned = deepClone(input);

    modify(cloned); // mutate cloned

    const actualOriginalValue = extract(input); // extract key from original

    const passed = actualOriginalValue === expectedOriginalValue;

    console.log(`${passed ? '✅' : '❌'} ${name}`);
    if (!passed) {
      console.log('Expected:', expectedOriginalValue);
      console.log('Got:', actualOriginalValue);
    }
  }
}

runTests();
