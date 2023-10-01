const express = require('express');

const app = express();

app.get('/', (req, res, next) => { 
  return res.status(200).send('hi');
});

app.listen(3210, ()=> {
  console.log('listening on port 3210');
})