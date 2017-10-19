const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const bodyParser =require('body-parser')
const hbs = require('hbs');


app.listen(port, () =>{
	console.log(`listening at ${port}`);
})
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine','hbs')