'use strict'

module.exports = function (server) {
  const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
  const io = socketIo.listen(server);
  // 接続
  io.sockets.on('connection', function (socket) {
    require('./test')(socket, io);

    require('./unityTest')(socket, io);

  });
};