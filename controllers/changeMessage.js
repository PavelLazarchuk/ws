const toJSON = require("../utils/toJSON");
const Massage = require("../models/Message");
const broadcast = require("../utils/broadcast");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (clients, { _id, text }) => {
  Massage.findByIdAndUpdate(
    _id,
    {
      text,
      changed: true,
    },
    { new: true }
  ).then((mess) => {
    Massage.find({}).then((messages) => {
      const data = toJSON({
        type: ALL_MESSAGE,
        data: messages,
      });

      broadcast(clients, data);
    });
  });
};
