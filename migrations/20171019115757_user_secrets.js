
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_secrets',table => {
		table.increments();
		table.integer('user_id').references('users.id').onDelete('cascade');
		table.integer('secret_id').references('secrets.id').onDelete('cascade')
	})

};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('user_secrets')

};
