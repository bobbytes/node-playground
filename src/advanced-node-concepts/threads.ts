import { pbkdf2 } from 'crypto';

process.env.UV_THREADPOOL_SIZE = '4';
console.log('thread pool size:', process.env.UV_THREADPOOL_SIZE);

const start = Date.now();

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('6:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('7:', Date.now() - start);
});

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('8:', Date.now() - start);
});
