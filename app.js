const express = require("express")
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/schema.js");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
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



  
app.get("/main", (req,res)=>{

    res.render("main.ejs")
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8080, () => {
  console.log(` app listening on port 8080`)
});


