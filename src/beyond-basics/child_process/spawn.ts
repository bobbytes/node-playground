import { spawn } from 'child_process';

const find = spawn('find', ['.', '-type', 'f']);

find.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

find.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

find.on('exit', (code, signal) => {
  console.log('child process exited with ' +
    `code ${code} and signal ${signal}`);
});

const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});

/*
spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
});

spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
  cwd: '',
});

spawn('echo $ANSWER', {
  stdio: 'inherit',
  shell: true,
  env: {
    ANSWER: '42',
  },
});
*/
