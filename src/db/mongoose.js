const mongoose = require("mongoose");
const config = require("config");
const mongoURI = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb database");
  } catch (e) {
    console.log({ error: e });
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
