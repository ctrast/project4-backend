const router = require("express").Router();
const Category = require("../models/category");

//Create new category
router.post("/new", async (req, res) => {
  console.log("here");
  let newCategory = await Category.create(req.body);
  res.josn(newCategory);
});

//Index All Category
router.get("/", async (req, res) => {
  let allCategory = await Category.find({});
  console.log("Req.body is: ", req.body);
  res.json(allCategory);
});

module.exports = router;
