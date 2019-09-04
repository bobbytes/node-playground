import fs from 'fs';
import path from 'path';
import { createServer } from 'http';

const server = createServer();

server.on('request', (_request, response) => {
  const readStream = fs.createReadStream(path.join(__dirname, './big.txt'));
  readStream.pipe(response);
});

server.listen(8000);
