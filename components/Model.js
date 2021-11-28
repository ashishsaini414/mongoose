const { Schema, model } = require("mongoose");

const ItemsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    isSanitized: Boolean,
    unit: {
      type: String,
      required: true,
    },
    expiryDate: Date,
    category: { type: String, default: null },
    location: { type: String, default: null },
  },
  { timestamps: { createdAt: "created_at" } }
);

const itemsModel = model("MyItems", ItemsSchema);

module.exports = itemsModel;
