import { throttle } from './throttle.js';

let calls = [];

const fakeFunc = (msg) => {
  calls.push(msg);
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function testThrottle() {
  calls = [];
  const throttled = throttle(fakeFunc, 100);

  throttled('a');
  throttled('b');
  throttled('c');

  await wait(150); // first throttle window ends

  throttled('d');
  throttled('e');

  await wait(150);

  console.assert(calls.length === 2, 'Should call only twice');
  console.assert(calls[0] === 'a', 'First call should be "a"');
  console.assert(calls[1] === 'd', 'Second call should be "d"');

  console.log('✅ throttle test passed');
}

testThrottle();
