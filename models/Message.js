const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    changed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = model("messages", MessageSchema);
