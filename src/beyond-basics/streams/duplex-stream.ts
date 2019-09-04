import { Duplex } from 'stream';

/**
 * It’s important to understand that the readable and writable sides of a duplex stream operate completely independently from one another.
 * This is merely a grouping of two features into an object.
 */

class DuplexStream extends Duplex {
  public currentCharCode = 0;

  public _write(chunk, _encoding, callback) {
    console.log(`this is chunk: ${chunk}`);
    callback();
  }

  public _read(_size: number): void {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push('\n');
      // tslint:disable-next-line: no-null-keyword
      this.push(null);
    }
  }
}

const duplexStream = new DuplexStream();
duplexStream.currentCharCode = 65;

process.stdin.pipe(duplexStream).pipe(process.stdout);
