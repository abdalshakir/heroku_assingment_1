import express from "express";
const app = express();
const port = process.env.port || 
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
  res.send('This is Home Page')
})

app.listen(3000)