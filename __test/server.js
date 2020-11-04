let ws = require('ws');
var server = new ws.Server({ port: 8080 });

server.on('connection', ws => {
  ws.on('message', message => {
    console.log(message);
    server.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(message);
      }
      // 自分以外
      // if (client !== ws && client.readyState === ws.OPEN) {
      //   client.send(message);
      // }
    })
  });
  ws.send("This is server");
});