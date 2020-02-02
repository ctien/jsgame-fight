import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

/**
 * Entry modules
 */
import routers from './routers';

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../dist')));

const initHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700&display=swap" rel="stylesheet">
      <title>mern app</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="./client/main.js"></script>
    </body>
  </html>
`;

app.get('/', (req, res, next) => {
  res.send(initHtml);
});

app.use('/api/v1', routers);

export default app;
