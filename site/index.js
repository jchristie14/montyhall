const express = require('express');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require ('./webpack.config');

const app = express();
// const compiler = webpack(webpackConfig);

// const watching = compiler.watch({
//   watch: true
// }, (err, stats) => {
//   console.log(stats);
// });

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: 'output.publicPath'
// }));

app.use(express.static('public'));

const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.render('home');
});

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), () => {
  console.log(`Express started on 'localhost:${app.get('port')}'; press Ctrl-C to terminate.`);
});
