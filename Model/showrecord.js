const mongoose = require("mongoose");

const Showrecord = mongoose.Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    item_id: {
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

const showrecord = mongoose.model("show_itemrecord", Showrecord);

module.exports = showrecord;
