import { Writable } from 'stream';

class WriteStream extends Writable {
  public _write(chunk, _encoding, callback): void {
    console.log(`this is chunk: ${chunk}`);
    callback();
  }
}

const writeStream = new WriteStream();

process.stdin.pipe(writeStream);
