const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.set('port', port);
app.set('view engine', 'pug');


const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
 
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));


app.use('/static', express.static(`${__dirname}/public`));
app.use('/static', express.static(`${__dirname}/dist`));

const render = view => (req, res) => {res.render(view, {})}
app.get('/', render('index'));
app.get('/about', render('about'));
app.get('/arenda', render('arenda'));
app.get('/dance', render('dance'));
app.get('/events', render('events'));
app.get('/schedule', render('schedule'));
app.get('/teacher', render('teacher'));


// пользовательская страница 404
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 — Не найдено'); });
// пользовательская страница 500 

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 — Ошибка сервера'); 
}); 

app.listen(port, function(){
    console.log( `Express запущен на http://localhost:${port}; нажмите Ctrl+C для завершения.` ); 
})