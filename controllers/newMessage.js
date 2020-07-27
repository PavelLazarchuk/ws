const toJSON = require("../utils/toJSON");
const Massage = require("../models/Message");
const broadcast = require("../utils/broadcast");
const { ONE_MESSAGE } = require("../utils/constants");

module.exports = (clients, text) => {
  const newMess = new Massage({
    text,
  });

  newMess.save().then((message) => {
    const data = toJSON({
      type: ONE_MESSAGE,
      data: message,
    });

    broadcast(clients, data);
  });
};
