const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.get('/portfolio', (req, res) => {
  res.sendFile('./public/portfolio.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./public/about.html', { root: __dirname });
});

app.get('/unique', (req, res) => {
  res.sendFile('./public/unique.html', { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile('./public/error.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});

// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   let parsedURL = url.parse(req.url, true);

//   let path = parsedURL.path.replace(/^\/+|\/+$/g, '');

//   // console.log(path);

//   if (path === '') {
//     path = 'index.html';
//   } else if (path === 'portfolio') {
//     path = 'portfolio.html';
//   } else if (path === 'about') {
//     path = 'about.html';
//   } else if (path === 'unique') {
//     path = 'unique.html';
//   } else if (path === 'styles.css') {
//     path = 'styles.css';
//   } else if (/\.png$/.test(path)) {
//     path = path;
//   } else if (/\.svg$/.test(path)) {
//     path = path;
//   } else {
//     path = 'error.html';
//   }

//   let file = __dirname + '/public/' + path;

//   // console.log(file);

//   fs.readFile(file, function (err, content) {
//     if (err) {
//       res.writeHead(404);
//       res.end();
//     } else {
//       res.setHeader('X-Content-Type-Options', 'nosniff');
//       // console.log(path);
//       switch (path) {
//         case 'styles.css':
//           res.writeHead(200, { 'Content-type': 'text/css' });
//           break;
//         case /\.png$/.test(path):
//           res.writeHead(200, { 'Content-type': 'image/png' });
//           break;
//         default:
//           res.writeHead(200, { 'Content-type': 'text/html' });
//       }
//       res.end(content);
//     }
//   });
// });

// server.listen(3000, 'localhost', () => {
//   console.log('Listening on port 3000');
// });
