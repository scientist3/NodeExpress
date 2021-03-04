const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send('Hellddfdsfo World sdfdhfkdshfkjds');
});

app.get('/:id',(req,res) => {
  res.send(req.params);
});

const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`Listing on port ${port}`));