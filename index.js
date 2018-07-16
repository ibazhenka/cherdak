// const express = require('express');
// const app = express();

// app.get('/hello', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// var http = require('http');
// http.createServer(function(req,res){    
//   // Приводим URL к единому виду путем удаления     
//   // строки запроса, необязательной косой черты     
//   // в конце строки и приведения к нижнему регистру    
//   var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();    
//   switch(path) {
//     case '': res.writeHead(200, {'Content-Type': 'text/plain'});                
//              res.end('Homepage');
//              break;        
//     case '/about': res.writeHead(200, { 'Content-Type': 'text/plain' });                
//                    res.end('О...');                
//                    break;        
//     default: res.writeHead(404, { 'Content-Type': 'text/plain' });                
//              res.end('Не найдено');
//              break;    } }).listen(3000);
//              console.log('Сервер запущен на localhost:3000; нажмите Ctrl+C для завершения....'); 

var http = require('http'), fs = require('fs');
function serveStaticFile(res, path, contentType, responseCode) {
  if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) {
    if(err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    } 
    else {
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}
http.createServer(function(req,res){    
  // Приводим URL к единому виду путем удаления
  // строки запроса, необязательной косой черты
  // в конце строки и приведения к нижнему регистру
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    case '/img/logo.jpg':
      serveStaticFile(res, '/public/img/logo.png', 'image/png');
      break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  } 
}).listen(3000);
console.log(' Сервер запущен на localhost:3000; нажмите Ctrl+C для завершения....');

