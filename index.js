const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

app.get('/about', (req, res) => {
  res.render('about', {
    fullname: 'Brian Velasco Vitualla',
    career: 'Web Developer Unta',
    facebookLink: 'https://www.facebook.com/brianVVitualla',
    twitterLink: 'https://twitter.com/_bri__bri___',
    linkedInLink: 'https://www.linkedin.com/in/brianvvitualla/',
    githubLink: 'https://github.com/br14nn',
  });
});

app.get('/unique', (req, res) => {
  res.render('unique.html');
});

app.use((req, res) => {
  res.status(404).render('error');
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
