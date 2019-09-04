import { Transform } from 'stream';

class TransformStream extends Transform {
  public _transform(chunk, _encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const transformStream = new TransformStream();

process.stdin.pipe(transformStream).pipe(process.stdout);
