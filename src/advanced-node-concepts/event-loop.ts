/**
 * timers -> IO -> poll -> check -> close -> timers -> ...
 * Timers: callbacks from setInterval or setTimeout
 * IO callbacks: callbacks from I/O events
 * Idle: used internally by Node between IO and Poll phases
 * Poll: retrieve new I/O events
 * Check: callbacks from setImmediate execute here
 * Close: handle closed connections like sockets
 */

const racer1 =  () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  console.log('current event loop');
};

const racer2 =  () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  console.log('current event loop');
};

const racer3 =  () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  console.log('current event loop');
};

const racer4 =  () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  console.log('current event loop');
};

racer1();
racer2();
racer3();
racer4();
