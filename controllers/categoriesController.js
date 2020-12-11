const router = require("express").Router();
const Category = require('../models/category');

//Create new category
router.get("/new", async (req, res) => {
  let allCategory = await Category.find({});
  res.send(allCategory)
});
//Index All Category
router.get("/", async (req, res) => {
  let allCategory= await Category.find({});
  console.log('Req.body is: ', req.body)
  res.send(allCategory)
});

module.exports = router;