
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
					username: 'jr',
					email: 'jr@galvanize.com',
					code: '1111',
				},
        {id: 2,
					username: 'mw',
					email: 'mw@galvanize.com',
					code: '222',
				},
        {id: 3,
					username: 'as',
					email: 'as@galvanize.com',
					code: '333',
				}
      ]);
    });
};
