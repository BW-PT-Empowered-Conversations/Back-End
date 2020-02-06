const request = require("supertest")
const server = require("./server")

describe("root path test", () => {
    it('should check the root path of the server', async () => {
        const res = await request(server).get("/")
        //Does return an expected status code
        expect(res.status).toBe(200)
        //Does it return the expected data format
        expect(res.type).toBe("application/json")
        //Does it return the expected data?
        expect(res.body.message).toBe("Empowerment Conversations API running.")
        })
})
