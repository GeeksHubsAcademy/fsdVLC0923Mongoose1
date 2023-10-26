const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cart: {
    products: [
      {
        item: {
          itemId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
          },
        },
      },
    ],
    required: true,
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
