// Generated by CoffeeScript 1.6.3
(function() {
  var app, commands, express, http, path, port, util;

  express = require('express');

  commands = require('./commands');

  util = require('./utility_functions');

  http = require('http');

  path = require('path');

  port = process.env.PORT || 3000;

  app = express();

  console.log("Server running on port " + port + ".");

  app.set('views', path.join(__dirname, 'views'));

  app.set('view engine', 'jade');

  app.use(express.logger('dev'));

  app.use(express.json());

  app.use(express.urlencoded());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express["static"](path.join(__dirname, 'public')));

  app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));

  if (app.get('env' === 'development')) {
    app.use(express.errorHandler());
  }

  app.get('/', function(req, res) {
    return res.render('index');
  });

  app.post('/', function(req, res) {
    var message, post, trigger, triggerLength;
    if (req.body.welcome) {
      res.send(util.buildMessage('Welcome master! Enter some commands below to get started! Don\'t know any commands? Type "!help"!'));
      return;
    }
    post = req.body.message;
    if (post.indexOf('!') === -1) {
      post = post.toLowerCase();
      if (post.indexOf('thank') !== -1) {
        res.send(util.buildMessage('No need to thank me. I was built to serve you master.'));
        return;
      }
      if (post.indexOf('hate') !== -1) {
        res.send(util.buildMessage('No need to hate me. I\'m just here to serve you.'));
        return;
      }
      if (post.indexOf('love') !== -1) {
        res.send(util.buildMessage('I love you too. Now, let me get back to work!'));
        return;
      }
      res.send(util.buildMessage('Please enter a command master. Enter "!help" if you want to see a list of commands.'));
      return;
    }
    triggerLength = post.split(' ')[0].length;
    trigger = post.substring(0, triggerLength).trim();
    message = post.substring(triggerLength + 1).trim();
    switch (trigger) {
      case '!calc':
        return commands.calc(message, res);
      case '!date':
        return commands.date(res);
      case '!weather':
        return commands.weather(message, res);
      case '!help':
        return commands.help(res);
      case '!dict':
        return commands.dict(message, res);
      case '!xkcd':
        return commands.xkcd(message, res);
      default:
        return res.send(util.buildMessage('I\'m sorry, but that command was not found! Enter "!help" if you want to see a list of commands.'));
    }
  });

  app.listen(port);

}).call(this);
