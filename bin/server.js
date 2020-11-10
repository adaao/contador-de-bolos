const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nosdestr:server');
require('dotenv').config();

function normalizePort(val){
   const port = parseInt(val, 10);

   if(isNaN(port)){
      return val;
   }

   if(port >= 0){
      return port;
   }

   return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

function errorHandler(error){
   if(error.syscall !== 'listen'){
      throw error;
   }

   const bind = typeof port === 'string' ? 'Pipe' + port : 'Port ' + port.toString();

   switch(error.code){
      case 'EACCES':
         console.error(bind + 'requires elevated privilegies.');
         process.exit(1);
      
      case 'EADDRINUSE':
         console.error(bind + 'is already in use.');
         process.exit(1);

      default:
         throw error;
   }
}

function listenerHandler(){
   const addr = server.address();
   const bind = typeof adddr === 'string' ? 'pipe ' + addr : port.toString() + ' addr port';
   console.log(`Server linstening on ${port}`);
   debug('Listening on ' + bind);
}

//server
const server = http.createServer(app);
server.listen(port);
server.on('error', errorHandler);
server.on('listening', listenerHandler);
