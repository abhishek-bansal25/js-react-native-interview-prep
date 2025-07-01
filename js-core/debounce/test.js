import {debounce} from './debounce.js';

let calls = [];

const fakeFunc = (msg) => {
  calls.push(msg);
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function testDebounce() {
  calls = [];

  const debounced = debounce(fakeFunc, 100);
  debounced('a');
  debounced('b');
  debounced('c');

  await wait(200); // wait for debounce to fire

  console.assert(calls.length === 1, 'Should have called only once');
  console.assert(calls[0] === 'c', 'Should have called with last value "c"');

  console.log('✅ debounce test passed');
}

testDebounce();
