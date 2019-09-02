/**
 * Network requests are delegated by libuv to OS async handlers.
 * The thread pool is not touched and requests are resolved more or less at the same time.
 */

import https from 'https';

const start = Date.now();

const request = () => {
  https
    .request('https://www.google.com', response => {
      // tslint:disable-next-line: no-empty
      response.on('data', () => { });
      response.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
};

for (let index = 1; index <= 8; index++) {
  request();
}
