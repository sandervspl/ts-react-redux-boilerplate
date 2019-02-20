import * as express from 'express';
import * as path from 'path';
import * as compress from 'compression';
import { port } from 'config';

const app = express();
app.use(compress());
app.use(express.static(path.resolve('dist')));

app.use((req, res) => {
  res.sendFile('index.html', {
    root: path.resolve('dist'),
  });
});

app.listen(port.client, () => {
  console.info(`Listening on port ${port.client}`);
});
