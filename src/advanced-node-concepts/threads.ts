import { pbkdf2 } from 'crypto';

process.env.UV_THREADPOOL_SIZE = '4';
console.log('thread pool size:', process.env.UV_THREADPOOL_SIZE);

const start = Date.now();

const createHash = (counter: number) => {
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`${counter}:`, Date.now() - start);
  });
};

for (let index = 1; index <= 8; index++) {
  createHash(index);
}
