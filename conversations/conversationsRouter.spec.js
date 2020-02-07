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

describe("Finds an invalid conversation", () => {
    it('should return a 401 and a message', async () => {
    const res = await request(server)
        .get("/api/user/1/1111")
    expect(res.status).toBe(401)
    expect(res.type).toBe("application/json")
  })
})

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

describe("delete a specific conversation", () => {
    it('it deletes a conversation with the specific user id and conversation id', async () => {
    const res = await request(server)
        .delete("/api/user/1/1")
    expect(res.status).toBe(204)
    //expect(res.body.message).toEqual("")
  })
})

describe("add new conversation", () => {
    it('should create a new conversation', async () => {
    const res = await request(server)
        .post("/api/user/1")
        .send({ recipient_first_name: "Bart", 
                recipient_last_name: "Simpson", 
	            recipient_user_phone:"9876543210",
	            topic:"Redux",
            })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})
