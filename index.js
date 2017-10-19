const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const bodyParser =require('body-parser')
const hbs = require('hbs');
const queries = require('./db/queries');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine','hbs')

app.get('/', (req, res) => {
	res.render('index.hbs')
})
app.post('/', (req, res)=>{
	queries.login(req.body.code)
	.then(user => {
		console.log(user);
	})
})
// route to login page
app.get('/login', (req, res) =>{
	res.render('login.hbs')
})

app.listen(port, () =>{
	console.log(`listening at ${port}`);
})
