const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/portfolio', (req, res) => {
  res.sendFile('./views/portfolio.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.render('about', {
    fullname: 'Brian Velasco Vitualla',
    career: 'Tig Develop ug Buang',
    facebookLink: 'https://www.facebook.com/brianVVitualla',
    twitterLink: 'https://twitter.com/_bri__bri___',
    linkedInLink: 'https://www.linkedin.com/in/brianvvitualla/',
    githubLink: 'https://github.com/br14nn',
  });
  // res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/unique', (req, res) => {
  res.sendFile('./views/unique.html', { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile('./views/error.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
