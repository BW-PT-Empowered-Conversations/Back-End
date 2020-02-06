
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(() => knex('conversations').del())
    .then(() => knex('users').del())
    .then(() => {
      //users seed
      return knex('users').insert([
        {
        id: 1, username: 'Homer',
        password: "$2b$10$K91fysUNyIRnUYQZROHdJumR1V.l/ssa4XMAfwc91d6c0/ChfL8yK", 
        first_name: "Homer",
        last_name:"Simpson", 
        email: "homer@powerplant.com", 
        user_phone: "1234567890"
        }
      ])
    })
    .then(() => {

        return knex('conversations').insert([
          {
          id: 1, 
          recipient_first_name: 'Bart',
          recipient_last_name: "Simpson", 
          recipient_phone: "1346789076",
          user_id: 1, 
          topic: "Grades"
          }
        ])
      })
      .then(() => {
        return knex('messages').insert([
            {
              id: 1,
              message: "Let's talk about React",
              conversation_id: 1,
              sent_by: "user",
              time_sent: "Thu Feb 06 2020 14:33:59 GMT+0000 (Coordinated Universal Time)",
              message_timestamp: "1580999639432"
            },
            {
              id: 2,
              message: "No!",
              conversation_id: 1,
              sent_by: "recipient",
              time_sent: "Thu Feb 06 2020 14:38:18 GMT+0000 (Coordinated Universal Time)",
              message_timestamp: "1580999898934"
            }
        ])
      })
      }
  // Deletes ALL existing entries
//   return knex('users').del()

//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([{
//         id: 1, username: 'Homer',
//         password: "$2b$10$K91fysUNyIRnUYQZROHdJumR1V.l/ssa4XMAfwc91d6c0/ChfL8yK", 
//         first_name: "Homer",
//         last_name:"Simpson", 
//         email: "homer@powerplant.com", 
//         user_phone: "1234567890"
//         }
//       ]);
//     });
// };
