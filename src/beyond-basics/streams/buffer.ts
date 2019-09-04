/**
 * Create an empty buffer of size 10.
 * A buffer that only can accommodate 10 bytes.
 */

const buffer10 = Buffer.alloc(10);

/**
 * Create a buffer with content
 */

const bufferWithContent = Buffer.from('hello world');

/**
 * Write to a buffer
 */
const writeToBuffer = Buffer.alloc(12);

// it can't accommodate all of the characters due to its limit of 12 bytes
writeToBuffer.write('Hey folks, I got some data');

/**
 * Interact with buffers
 */

console.log('as Unicode Code Points of the characters');
console.log('empty 10 bytes buffer:', buffer10.toJSON());
console.log('buffer with content:', bufferWithContent.toJSON());
console.log('write buffer:', writeToBuffer.toJSON());
console.log('\n');

console.log('examine the size of a buffer');
console.log('empty 10 bytes buffer:', buffer10.length);
console.log('buffer with content:', bufferWithContent.length);
console.log('write buffer:', writeToBuffer.length);
console.log('\n');

console.log('get data as string');
console.log('empty 10 bytes buffer:', buffer10.toString());
console.log('buffer with content:', bufferWithContent.toString());
console.log('write buffer:', writeToBuffer.toString());
console.log('\n');
