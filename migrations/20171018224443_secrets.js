
exports.up = function(knex, Promise) {
  return knex.schema.createTable('secrets', table => {
		table.increments();
		table.text('secret');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('secrets');
};
