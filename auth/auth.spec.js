const request = require("supertest")
const server = require("../api/server")
const db = require("../data/db")

beforeEach(async () => {
    await db.seed.run()
  })


describe("login", () => {
    it('should login an existing user', async () => {
    const res = await request(server)
        .post("/api/login")
        .send({ username: "Homer", password: "DuffBeer" })
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toEqual("User successfully logged in!")
  })
})

describe("register", () => {
    it('should registers a new user', async () => {
    const res = await request(server)
        .post("/api/register")
        .send({ username: "Bart", 
                password: "DontHaveACowMan", 
                email: "bart@springfield.com",
	            user_phone:"9876543210",
	            first_name:"Bart",
	            last_name:"Simpson"})
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toEqual("User successfully registered!")
  })
})
