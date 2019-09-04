import path from 'path';
import { fork } from 'child_process';

const forked = fork(path.join(__dirname, 'child-fork.js'));

forked.on('message', (message) => {
  console.log('Message from child', message);
});

forked.send('Hello World!');
