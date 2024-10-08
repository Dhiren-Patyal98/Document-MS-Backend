const mongoose = require("mongoose");

const InventoryItems = mongoose.Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    availableItem: {
      type: Number,
      required: true,
    },
    lossDamageItem: {
      type: Number,
      required: true,
    },
    category_id: {
      type: String,
      required: true,
    },
    branch_name: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const inventoryitem = mongoose.model("inventory_item", InventoryItems);

module.exports = inventoryitem;
