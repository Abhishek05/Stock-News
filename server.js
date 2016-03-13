  var http  = require('http');
  var fs    = require('fs');
  var path  = require('path');
  var mime  = require('mime');
  var express = require('express');
  var request = require('request');
  var xml = require('xml');
  var app = express();
  var cache = {};



  function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
  }

  function sendFile(response, filePath, fileContents) {
    response.writeHead(200,{"content-type": mime.lookup(path.basename(filePath))});
    response.end(fileContents);
  }

  function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
      sendFile(response, absPath, cache[absPath]);
    } else {
      fs.exists(absPath, function(exists) {
        if (exists) {
          fs.readFile(absPath, function(err, data) {
            if (err) {
              send404(response);
            } else {
              cache[absPath] = data;
              sendFile(response, absPath, data);
            }
          });
        } else {
          send404(response);
        }
      });
    }
  }

  app.get('/', function(req, res) {
    filePath = 'public/index.html';
    var absPath = './' + filePath;
    serveStatic(res, cache, absPath);
  });

  app.get('/mainController', function(req, res) {
    filePath = 'public/controller/main-controller.js';
    var absPath = './' + filePath;
    serveStatic(res, cache, absPath);
  });

  app.get('/stock/:name', function(req, res) {
      console.log(req.params.name)
      request.get('http://articlefeeds.nasdaq.com/nasdaq/symbols?symbol='+req.params.name, function(err, response, body) {
          if (!err && response.statusCode == 200) {
              //var locals = JSON.parse(body);
              console.log(body);
              res.set('Content-Type', 'text/xml');
              res.send(xml(body));
              //res.render('<YOUR TEMPLATE>', body);
          }
      });

   //res.send('{"id": 1,"name":req.params.name, "band":"BBQ Brawlers"}');
});

  app.listen(3000);
  console.log('Listening on port 3000...');

  /*var server = http.createServer(function(request, response) {
    var filePath = false;
    if (request.url == '/') {
      filePath = 'public/index.html';
      var absPath = './' + filePath;
      serveStatic(response, cache, absPath);
    } else {
      filePath = 'public' + request.url;
    }
    var absPath = './' + filePath;
    serveStatic(response, cache, absPath);

  });

  server.listen(3000, function() {
    console.log("Server listening on port 3000.");
  });*/
