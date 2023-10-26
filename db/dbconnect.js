
const mongoose = require("mongoose");

const startConnection = async () => {
    try {
      await mongoose.connect(`mongodb+srv://carmanager:YXpsfN66GYCrLLAP@dbhive.cu5o7.mongodb.net/muscleshop?retryWrites=true&w=majority`);
      console.log("MongoDB connected 🍃");
    } catch (err) {
      console.error(err);
    }
  };

module.exports = startConnection;