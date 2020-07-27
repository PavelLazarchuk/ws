const toJSON = require("../utils/toJSON");
const Massage = require("../models/Message");
const broadcast = require("../utils/broadcast");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (clients, message) => {
  Massage.findByIdAndDelete(message._id).then((del) => {
    Massage.find({}).then((messages) => {
      const data = toJSON({
        type: ALL_MESSAGE,
        data: messages,
      });

      broadcast(clients, data);
    });
  });
};
