const db = require('./connections');

function login(code){
	return db('users').select().where('code', code)
	// fuck
}

function mySecrets(id){
	return db('user_secrets').select().where('user_id', id)
}
function getSecret(id){
	return db('secrets').select().where('id', id)
}

module.exports = {
	login,
	mySecrets,
	getSecret,
}
