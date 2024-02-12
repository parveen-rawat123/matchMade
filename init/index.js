const mongoose = require("mongoose")
const  initdata = require(".init/data.js");
const listing = require("../models/schema.js")
const MONGO_URL = "mongodb://127.0.0.1:27017/matchmade";

main()
.then(()=>{
 console.log("connected to DB")
})
.catch((err)=>{
  console.log(err)
});

async function main(){
    await mongoose.connect(MONGO_URL)
};

const initDB = async ()=>{
    await listing.deleteMany({}),
    await listing.insertMany(initdata.data)
    console.log("data was intialized")
}
initDB();
