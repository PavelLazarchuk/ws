const toJSON = require("../utils/toJSON");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (ws, dataBase, message) => {
  const newData = dataBase.filter((item) => item.id !== message.id);

  dataBase = newData;

  ws.send(
    toJSON({
      type: ALL_MESSAGE,
      data: dataBase,
    })
  );
};
