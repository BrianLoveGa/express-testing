const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');


/// TESTING

/// tests for get functions
/// checking r of crud - read

/// does page exist - 200 status ?
/// does page have a json array ?
/// does that array at index 0 have a name field ?

describe("Get /candies ", () => {
    it("should return a 200 response", done => {

        api.get("/candies").set("Accept", "application/json").expect(200, done);

    });

    it("should return an array", () => {

        api.get("/candies").set("Accept", "application/json").end((error, response) => {
            expect(response.body).to.be.an('array');
        });
    });
    /// id field

    it("should return an array of objects that position 0 has a field called 'id' ", () => {
        api.get("/candies").set("Accept",

            /// should loop and check all - maybe later - if first is good ok to assume for this time only the rest are ok too

            "application/json").end((error, response) => {
            expect(response.body[0]).to.have.property("id");

        });
    });

    it("should return an array of objects that position 2 has a field called 'id' ", () => {
        api.get("/candies").set("Accept",

            /// should loop and check all - maybe later - if first is good ok to assume for this time only the rest are ok too

            "application/json").end((error, response) => {
            expect(response.body[2]).to.have.property("id");

        });
    });
    /// color field

    it("should return an array of objects that position 0 has a field called 'color' ", () => {
        api.get("/candies").set("Accept",

            /// should loop and check all - maybe later - if first is good ok to assume for this time only the rest are ok too

            "application/json").end((error, response) => {
            expect(response.body[0]).to.have.property("color");

        });
    });

    it("should return an array of objects that position 3 has a field called 'color' ", () => {
        api.get("/candies").set("Accept",

            /// should loop and check all - maybe later - if first is good ok to assume for this time only the rest are ok too

            "application/json").end((error, response) => {
            expect(response.body[3]).to.have.property("color");

        });
    });



    it("should return an array of objects that position 0 has a field called 'name' ", done => {
        api.get("/candies").set("Accept",

            /// should loop and check all - maybe later - if first is good ok to assume for this time only the rest are ok too

            "application/json").end((error, response) => {
            expect(response.body[0]).to.have.property("name");
            done();
        });
    });

    it("should return an array of objects that position 1 has a field called 'name' ", done => {
        api.get("/candies").set("Accept",

            /// should loop and check all - maybe later - if first is good ok to assume for this time only the rest are ok too

            "application/json").end((error, response) => {
            expect(response.body[1]).to.have.property("name");
            done();
        });
    });

});


//// checking c of crud - create

//  post working - comment out to check delete - might cause error since adding one then deleteing one - and checking at same time - 

describe("POST /candies", () => {

    before(done => {
        api
            .post("/candies")
            .set("Accept", "application/json")
            .send({
                "id": 5,
                "name": "Lollipop",
                "color": "Red"
            })
            .end(done)
    });

    it("should add a candy object to the collection candies and return it", done => {
        api
            .get("/candies")
            .set("Accept", "application/json")
            .end((error, response) => {
                expect(response.body.length).to.equal(5);
                done()
            });
    });

});

//// checking d of crud - delete it ... omg that 📷 is sooo baddd deelllete iiitttttt !!

// describe("DELETE /candies/:id", () => {

//     before(done => {
//         api
//           .delete("/candies/:1")
//           .set("Accept", "application/json")
//           .end(done)
//       });

//       it("should remove a candy object from the collection candies ", done => {
//         api
//           .get("/candies")
//           .set("Accept", "application/json")
//           .end((error, response) => {
//             expect(response.body.length).to.equal(3);
//             done()
//           });
//       });  

// });


// delete working




describe("GET /candies/:id", () => {
    it("should return a candy with correct fields", done => {
        api
            .get("/candies/1")
            .set("Accept", "application/json")
            .end((error, response) => {
                expect(response.body).to.have.property("id");
                expect(response.body).to.have.property("name");
                expect(response.body).to.have.property("color");
                done();
            });
    });
});