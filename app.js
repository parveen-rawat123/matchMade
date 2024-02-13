const express = require("express")
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const listing = require("./models/schema.js");
const ejsMate = require("ejs-mate")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
const MONGO_URL = "mongodb://127.0.0.1:27017/matchmade";

main()
  .then(() => {
    console.log("connected to DB")
  })
  .catch((err) => {
    console.log(err)
  });

async function main() {
  await mongoose.connect(MONGO_URL)
};



  // main route
app.get("/main", async (req,res)=>{
let alluser = await listing.find({})
  res.render("main.ejs",{alluser})
})

// profile route 
app.get("/main/:id", async (req,res)=>{
  let {id} = req.params;
  let finduser =  await user.findById(id);
  req.render("profilelist.ejs",{finduser});
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8080, () => {
  console.log(` app listening on port 8080`)
});


