'use strict';

module.exports = function (socket, io) {
  socket.on('sendTest', function (data) {
    if (!data) {
      return;
    }
    // 自クライアントへ
    // socket.emit('funcname', data);
    // 自分以外へ
    // socket.broadcast.emit('funcname', data);
    // 全クライアントへ
    io.sockets.emit('receiveTest', data);
  })
}