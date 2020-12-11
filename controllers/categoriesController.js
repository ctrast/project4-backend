const router = require("express").Router();
const Category = require("../models/category");

//Create new category
router.post("/new", async (req, res) => {
  let newCategory = await Category.create(req.body);
  res.json(newCategory);
});

//Index All Category
router.get("/", async (req, res) => {
  try {
    let allCategory = await Category.find({});
    console.log(allCategory);
    res.json(allCategory);
  } catch {
    res.json("There is an error " + allCategory);
  }
});

module.exports = router;
