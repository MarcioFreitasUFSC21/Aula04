const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!! Welcome to the my  Repl -it page!')
});

app.listen(3000, () => {
  console.log('server started');
});
