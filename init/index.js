const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Mongoose created 
main()
.then(()=>{
    console.log("conncted to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StaySphere');
}

const initDB = async()=>{

  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) =>({...obj , owner :"698882c82444dc3df209ecba"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();