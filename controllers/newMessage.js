const toJSON = require("../utils/toJSON");
const getId = require("../utils/getRandomId");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (ws, dataBase, message) => {
  dataBase.push({
    message,
    id: getId(),
    changed: false,
    date: new Date(),
  });

  ws.send(
    toJSON({
      type: ALL_MESSAGE,
      data: dataBase,
    })
  );
};
