const mongoose = require("mongoose");

const Branch = mongoose.Schema(
  {
    branch_name: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const branch = mongoose.model("branch", Branch);

module.exports = branch;
