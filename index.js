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
		res.redirect('/homepage/' + user[0].id)
	})
})
app.get('/homepage/:id', (req, res)=>{
	let secretObject = {
		secrets: []
	}
queries.mySecrets(req.params.id)
	.then(secrets =>{
			for (var i = 0; i < secrets.length; i++) {
				queries.getSecret(secrets[i].secret_id)
					.then(aSecret => {
						secretObject.secrets.push(aSecret[0].secret)
						console.log(secretObject);
					})
			}
})
	res.render('homepage',secretObject)
})
// route to login page
app.get('/login', (req, res) =>{
	res.render('login.hbs')
})

app.listen(port, () =>{
	console.log(`listening at ${port}`);
})
