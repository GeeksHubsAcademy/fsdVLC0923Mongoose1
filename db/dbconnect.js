
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const startConnection = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dbhive.cu5o7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
      console.log("MongoDB connected 🍃");
    } catch (err) {
      console.error(err);
    }
  };

module.exports = startConnection;