import path from 'path';
import { execFile } from 'child_process';

execFile('node', [path.join(__dirname, 'child.js')], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }

  console.log(stdout, stderr);
});
