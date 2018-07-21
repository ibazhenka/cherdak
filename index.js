var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.use('/static', express.static(__dirname + '/public'));
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
app.listen(app.get('port'), function(){
    console.log( 'Express запущен на http://localhost:' + 
    app.get('port') + '; нажмите Ctrl+C для завершения.' ); 
})