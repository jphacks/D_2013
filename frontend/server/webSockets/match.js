'use strict'

module.exports = (wss) => {
  wss.on('connection', ws => {
    ws.send("user_id:i");
    ws.on('message', message => {
      wss.clients.forEach(client => {
        // if (client.readyState === ws.OPEN) {
        //   client.send(message);
        // }
        // 自分以外
        if (client !== ws && client.readyState === ws.OPEN) {
          client.send(message);
        }
      })
    });
  });
};