const mongoose = require("mongoose");

const Category = require("./models/category");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/" + "project4";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
() => {
  console.log("the connection with mongod is established");
};

async function seed() {
  // CREATE A NEW Category
  const BeforeandAfter = new Category({
    name: "Before and After",
    phrases: [
      ["Whitney Houston Texas", "Stop Sign Language"],
      ["Whitney Houston Texas", "Stop Sign Language"],
    ],
  });

  const BestSeller = new Category({
    name: "Best Sellers",
    phrases: ["Gone with the wind", "Old Yeller"],
  });

  BeforeandAfter.save(function (err, saved) {
    if (err) {
      console.log(err);
    } else {
      console.log("Before and After is ", saved);
    }
  });

  BestSeller.save(function (err, saved) {
    if (err) {
      console.log(err);
    } else {
      console.log("Best Seller is ", saved);
    }
  });
}

seed();
