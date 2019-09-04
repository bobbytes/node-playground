import { Readable } from 'stream';

class ReadStream extends Readable {
  public currentCharCode = 0;

  public _read(_size: number): void {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push('\n');
      // tslint:disable-next-line: no-null-keyword
      this.push(null);
    }
  }
}

const readStream = new ReadStream();

readStream.currentCharCode = 65;

readStream.pipe(process.stdout);
