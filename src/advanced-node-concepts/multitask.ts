/**
 * HTTP request returns first because the thread pool is not touched by the OS async handler.
 * Filesystem load takes that long because fs loads some statistics (e.g. size) about the file first:
 * 1. rs.readFile is called.
 * 2. Node.js loads file stats from the file.
 * 3. Hard disk is accessed and file stats are returned to Node.js
 *      - While the thread pool is waiting for hard disk response, it takes the next task.
 *        File system response has to wait until a thread is available to take it.
 * 4. Node.js requests the hard disk to load the file.
 * 5. Hard disk is accessed again and returns file content back to Node.js
 * 6. Node.js returns file content.
 */

import https from 'https';
import { pbkdf2 } from 'crypto';
import fs from 'fs';

process.env.UV_THREADPOOL_SIZE = '4';

const start = Date.now();

const makeRequest = () => {
  https
    .request('https://www.google.com', response => {
      // tslint:disable-next-line: no-empty
      response.on('data', () => { });
      response.on('end', () => {
        console.log('request:', Date.now() - start);
      });
    })
    .end();
};

const createHash = (counter: number) => {
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`hash ${counter}:`, Date.now() - start);
  });
};

const readFile = () => {
  fs.readFile(__filename, 'utf8', () => {
    console.log('fs:', Date.now() - start);
  });
};

makeRequest();

readFile();

for (let index = 1; index <= 4; index++) {
  createHash(index);
}
