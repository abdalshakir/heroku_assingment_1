import express from "express";
const app = express();
const port = process.env.PORT || 3000
 
app.get('/', function (req, res) {
  res.send('Hello')
})

app.get('/home', function (req, res) {
  res.send('This is Home Page')
})

app.listen(3000)