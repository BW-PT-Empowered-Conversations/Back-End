const request = require("supertest")
const server = require("../api/server")
const db = require("../data/db")
const restrict = require('../auth/authMiddleware.js');
jest.mock('../auth/authMiddleware.js');

describe("add new a message", () => {
    it('should create a new message', async () => {
    const res = await request(server)
        .post("/api/user/1/1/message")
        .send({ message: "Hello World"})
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})


describe("Finds a specific message", () => {
    it('shows an array with the specific user id, conversation id and message id', async () => {
    const res = await request(server)
        .get("/api/user/1/1/message/1")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})

describe("Finds an invalid message", () => {
    it('should return a 401 and a message', async () => {
    const res = await request(server)
        .get("/api/user/1/1/message/1111")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toEqual(0)
  })
})

describe("delete a specific message", () => {
    it('deletes a message with the specific user id, conversation id and message id', async () => {
    const res = await request(server)
        .delete("/api/user/1/1/message/1")
    expect(res.status).toBe(204)
    //expect(res.body.message).toEqual("")
  })
})

describe("Finds messages", () => {
    it('shows an array of messages by a user id and conversation id', async () => {
    const res = await request(server)
        .get("/api/user/1/1/messages/")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    //expect(res.body.message).toEqual("")
  })
})


