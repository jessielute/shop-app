const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const app = express();
const gShoppingCart = [];
const cartRouter = express.Router();
const http = require('http');
const debug = require('debug')('shop:server');

/* GET users listing. */
cartRouter.get('/', function(req, res, next) {
  res.send(gShoppingCart);
});

cartRouter.post('/', function(req, res, next) {
  gShoppingCart.push(req.body);

  res.send(req.body);
})

app.use(logger('dev'));

app.use(express.json());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/cart', cartRouter);

const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);