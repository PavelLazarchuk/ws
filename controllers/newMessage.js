const toJSON = require("../utils/toJSON");
const getId = require("../utils/getRandomId");
const { ONE_MESSAGE } = require("../utils/constants");

module.exports = (ws, dataBase, message) => {
  const newMess = {
    message,
    id: getId(),
    changed: false,
    date: new Date(),
  };

  dataBase.push(newMess);

  ws.send(
    toJSON({
      type: ONE_MESSAGE,
      data: newMess,
    })
  );
};
