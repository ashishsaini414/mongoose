const { Schema, model } = require("mongoose");

const ItemsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    isSanitized: Boolean,
    unit: {
        type: String,
        required: true
    },
    expiryDate: Date,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },
    category: [{type: String}],
    location: [{type: String}]
})
ItemsSchema.pre('update', function() {
    this.set({ updatedDate: Date.now() });
  });
ItemsSchema.pre('create', function() {
    this.set({ createdDate: Date.now() });
});

const itemsModel = model("MyItems",ItemsSchema)
console.log(itemsModel)
module.exports = itemsModel;