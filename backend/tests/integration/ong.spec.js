const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG",()=>{
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () =>{
        await connection.destroy();
    });

    it("should be able to create a ONG", async ()=>{
        const response = await request(app).post("/ongs").send({
            name : "ABCD",
	        email: "AAA@AA.com",
	        whatsapp : "1234567890",
	        city : "Alfenas",
	        uf : "MG"
        });

        expect(response.body).toHaveProperty("id");
    })
});