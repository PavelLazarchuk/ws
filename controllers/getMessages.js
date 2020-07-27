const toJSON = require("../utils/toJSON");
const Massage = require("../models/Message");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (ws) => {
  Massage.find({}).then((messages) => {
    const data = toJSON({
      type: ALL_MESSAGE,
      data: messages,
    });

    ws.send(data);
  });
};
