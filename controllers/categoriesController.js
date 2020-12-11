const router = require("express").Router();
const Category = require("../models/category");

//Update Route
router.put("/:categoryid",async(req,res)=>{
    try{
        let foundCategory = await Category.findByIdAndUpdate(req.params.categoryId,req.body)
          res.json(foundCategory)
        }catch(error){
          console.log(error)
    
        }
});
//Create new category
router.post("/new", async (req, res) => {
  console.log("here");
  let newCategory = await Category.create(req.body);
  res.json(newCategory);
});

//Index All Category
router.get("/", async (req, res) => {
  let allCategory = await Category.find({});
  console.log("Req.body is: ", req.body);
  res.json(allCategory);
});
//Delete values in Category
router.delete("/:phraseId/:categoryId", async (req, res) => {
    console.log(req.params.phraseId)
    console.log(req.params.categoryId)
    //res.send('see the terminal')
    try{
      let foundCategory=await Category.findOneAndUpdate(
        { _id: req.params.categoryId },
        {$pull: { phrase:req.params.phraseId}},
        { new: true });
      
        res.json(foundCategory);
    }catch(err){
      console.error(err);
      res.send('see the terminal')
    }
});
//Delete Route category
router.delete("/:categoryId", async (req, res) => {
    console.log(req.params.categoryId)
  try{ 
    let foundCategory=await Category.findByIdAndRemove({_id:req.params.categoryId})
        res.json(foundCategory);
  }catch(error){
      console.log(error)
      res.send('see the terminal')
    }
    
  // );

  //redirect back to index route
});
module.exports = router;
