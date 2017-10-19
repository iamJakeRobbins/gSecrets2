const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const bodyParser =require('body-parser')
const hbs = require('hbs');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine','hbs')

app.get('/', (req, res) => {
	res.render('index.hbs')
})
app.get('/index.hbs', (req, res) => {
	res.render('index.hbs')
})
// route to login page
app.get('/login.hbs', (req, res) =>{
	res.render('login.hbs')
})

app.listen(port, () =>{
	console.log(`listening at ${port}`);
})
