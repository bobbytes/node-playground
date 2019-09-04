// tslint:disable: max-classes-per-file

import { Transform } from 'stream';

class CommaSplitterStream extends Transform {
  constructor() {
    super({
      readableObjectMode: true,
    });
  }

  public _transform(chunk, _encoding, callback) {
    const transFormedArray = chunk
      .toString()
      .trim()
      .split(',');

    this.push(transFormedArray);

    callback();
  }
}

class ArrayToObjectStream extends Transform {
  constructor() {
    super({
      readableObjectMode: true,
      writableObjectMode: true,
    });
  }

  public _transform(chunk, _encoding, callback) {
    const obj = {};

    chunk.forEach((value, index) => {
      obj[value] = index + 1;
    });

    this.push(obj);

    callback();
  }
}

class ObjectToStringStream extends Transform {
  constructor() {
    super({
      writableObjectMode: true,
    });
  }

  public _transform(chunk, _encoding, callback) {
    this.push(`${JSON.stringify(chunk)}\n`);

    callback();
  }
}

const commaSplitterStream = new CommaSplitterStream();
const arrayToObjectStream = new ArrayToObjectStream();
const objectToStringStream = new ObjectToStringStream();

process.stdin
  .pipe(commaSplitterStream)
  .pipe(arrayToObjectStream)
  .pipe(objectToStringStream)
  .pipe(process.stdout);
