const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.set('port', port);
app.set('view engine', 'pug');


const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const {halls} = require('./data')
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));


app.use('/static', express.static(`${__dirname}/public`));
app.use('/static', express.static(`${__dirname}/dist`));

const render = (view, model) => (req, res) => {res.render(view, model)}
app.get('/', render('index'));
app.get('/about', render('about'));
app.get('/about/arenda', render('arenda', halls));
app.get('/dance', render('dance'));
app.get('/dance/:danceName', (req, res) => {res.render('dance-page',  {danceName: req.params.danceName})});
app.get('/price', render('price'));
app.get('/events', render('events'));
app.get('/schedule', render('schedule'));
app.get('/teacher', render('teacher'));
app.get('/teacher/:teacherName', (req, res) => {res.render('teacher-page',  {teacherName: req.params.teacherName})});
app.get('/registration', render('registration'));
app.get('/robots.txt', (req, res)=>{
  res.type('text/plain');
  res.status(200);
  res.send("User-agent: * \nDisallow: /");
})


// пользовательская страница 404
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 — Не найдено'); });
// пользовательская страница 500 

app.use(function(err, req, res, next){
  res.type('text/plain');
  res.status(500);
  res.send(err.message + "\n" + err.stack); 
}); 

app.listen(port, function(){
    console.log( `Express запущен на http://localhost:${port}; нажмите Ctrl+C для завершения.` ); 
})