const express = require('express');
const app = express();

const port = '8080';

app.get('/', (req, res) => {
  res.send('hello Express');
})

app.listen(port, () => {
  console.log('listen: ' + port);
});