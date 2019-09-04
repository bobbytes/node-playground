import fs from 'fs';
import path from 'path';
import { createServer} from 'http';

const server = createServer();

server.on('request', (_request, response) => {
  fs.readFile(path.join(__dirname, './big.txt'), (error, data) => {
    if (error) {
      throw error;
    }

    response.end(data);
  });
});

server.listen(8000);
