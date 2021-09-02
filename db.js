const mongoose = require("mongoose");
const { DB_URI, DB_NAME } = require("./config");

module.exports.connectDb = async () => {
  console.log("Connecting to DB.");
  await mongoose.connect(DB_URI, {
    dbName: DB_NAME,
    retryWrites: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("DB connected.");
};
