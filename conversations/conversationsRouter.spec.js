const request = require("supertest")
const server = require("../api/server")
const db = require("../data/db")
const restrict = require('../auth/authMiddleware.js');
jest.mock('../auth/authMiddleware.js');

describe("list of conversations for an existing user", () => {
    it('show an array of conversations', async () => {
    const res = await request(server)
        .get("/api/user/1")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})

// describe("list of conversations for an invalid user", () => {
//     it('show an array of conversations', async () => {
//     const res = await request(server)
//         .get("/api/user/1000")
//     expect(res.status).toBe(401)
//     expect(res.type).toBe("application/json")
//     //expect(res.body.message).toEqual("")
//   })
// })

describe("Finds a specific conversation", () => {
    it('shows an array with the specific user id and conversation id', async () => {
    const res = await request(server)
        .get("/api/user/1/1")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})

describe("Finds conversation that does not exist", () => {
    it('shows an error message with a 401', async () => {
    const res = await request(server)
        .get("/api/user/1/555")
    expect(res.status).toBe(401)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})

