/**
 * timers -> IO -> poll -> check -> close -> timers -> ...
 * Timers: callbacks from setInterval or setTimeout
 * IO callbacks: callbacks from I/O events
 * Idle: used internally by Node between IO and Poll phases
 * Poll: retrieve new I/O events
 * Check: callbacks from setImmediate execute here
 * Close: handle closed connections like sockets
 */

const racer =  () => {
  process.on('exit', () => console.log('exit'));
  setTimeout(() => console.log('timeout long'), 5000);
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  console.log('current event loop');
};

for (let index = 1; index <= 4; index++) {
  racer();
}
