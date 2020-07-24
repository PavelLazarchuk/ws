const toJSON = require("../utils/toJSON");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (ws, dataBase, message) => {
  const newData = dataBase.map((item) => {
    if (item.id === message.id) {
      return {
        ...item,
        changed: true,
        message: message.message,
      };
    } else {
      return item;
    }
  });

  dataBase = newData;

  ws.send(
    toJSON({
      type: ALL_MESSAGE,
      data: dataBase,
    })
  );
};
