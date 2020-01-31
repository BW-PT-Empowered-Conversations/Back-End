
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        id: 1, username: 'Homer',
        password: "$2b$10$K91fysUNyIRnUYQZROHdJumR1V.l/ssa4XMAfwc91d6c0/ChfL8yK", 
        first_name: "Homer",
        last_name:"Simpson", 
        email: "homer@powerplant.com", 
        user_phone: "1234567890"
        }
      ]);
    });
};
