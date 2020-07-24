const toJSON = require("../utils/toJSON");
const { ALL_MESSAGE } = require("../utils/constants");

module.exports = (ws, dataBase) => {
  ws.send(
    toJSON({
      type: ALL_MESSAGE,
      data: dataBase,
    })
  );
};
