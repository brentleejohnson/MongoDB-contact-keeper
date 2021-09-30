const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1); // Exits with failure
  }
};

const connectDB = async () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1); // Exits with failure
    });
};

module.exports = connectDB;
