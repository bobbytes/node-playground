import { exec } from 'child_process';

exec('find . -type f | wc -l', (err, stdout, _stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
