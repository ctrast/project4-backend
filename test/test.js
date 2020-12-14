const request = require("supertest");
const app = require("../server");


describe("Express routes", function () {
  deleteMeID = 0;

    it("returns all categories", function (done) {
      request(app).get("/").expect("Content-Type", /json/).expect(200, done);
    });

    it("returns random category", function (done) {
      request(app)
        .get("/getRanCat")
        .expect(200)
        .end(function (err, res) {
          console.log(res.body);
          done();
        });
    });

  it("create new category with phrases", function (done) {
    request(app)
      .post("/new")
      .send({
        name: "Food & Drink DELETE ME",
        phrases: [
          ["almond cake"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "A", "L", "M", "O", "N", "D", "", "", "", "", ""],
            ["", "", "", "C", "A", "K", "E", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
          ["beef tacos"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "B", "E", "E", "F", "", "T", "A", "C", "O", "S", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
          ["whiskey"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "w", "H", "I", "S", "K", "E", "Y", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
          ["Beer"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "B", "E", "E", "R", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
        ],
      })
      .expect(200)
      .end(function (err, res) {
        deleteMeID = res.body._id;
        console.log("DELETE ME ID IS", deleteMeID);
        done();
      });
  });

  it("update category with new/removed phrases", function (done) {
  request(app)
      .put("/"+deleteMeID)
      .send({
        name: "Food & Drink DELETE ME",
        phrases: [
          ["almond cake"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "A", "L", "M", "O", "N", "D", "", "", "", "", ""],
            ["", "", "", "C", "A", "K", "E", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
          ["whiskey"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "w", "H", "I", "S", "K", "E", "Y", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
          ["Beer"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "B", "E", "E", "R", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
          ["almond cake"],
          [
            ["", "", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "A", "L", "M", "O", "N", "D", "", "", "", "", ""],
            ["", "", "", "C", "A", "K", "E", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "", ""],
          ],
        ],
      })
      .expect(200)
      .end(function (err, res) {
        done();
      });
  });

  it("delete category", function (done) {
    request(app)
      .delete("/" + deleteMeID)
      .expect(200, done);
  });
});
