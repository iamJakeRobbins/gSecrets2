const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const bodyParser =require('body-parser')
const hbs = require('hbs');


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine','hbs')

// app.get('/', (req, res) => {
// 	res.send('hello world')
// })
app.get('/', (req, res) => {
	res.render('index.hbs')
})


app.listen(port, () =>{
	console.log(`listening at ${port}`);
})
