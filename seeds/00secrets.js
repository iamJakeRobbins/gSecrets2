
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1,
					secret: 'test string one'
				},
		        {id: 2,
			secret: 'oh so secret'
				},
        {id: 3,
					secret: 'dont even know anymore'
				}
      ]);
    });
};
