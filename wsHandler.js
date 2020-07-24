const {
  OPEN,
  CLOSE,
  NEW_MESSAGE,
  ALL_MESSAGE,
  CHANGE_MESSAGE,
} = require("./utils/constants");
const toJSON = require("./utils/toJSON");
const newMessage = require("./controllers/newMessage");
const getMessages = require("./controllers/getMessages");
const changeMessage = require("./controllers/changeMessage");

module.exports = (ws, req) => {
  let dataBase = [];
  ws.on("open", () => {
    ws.send(
      toJSON({
        status: OPEN,
        message: "server open",
      })
    );
  });

  ws.on("close", () => {
    ws.send(
      toJSON({
        status: CLOSE,
        message: "server close",
      })
    );
  });

  ws.on("message", (data) => {
    const { type, message } = JSON.parse(data);

    switch (type) {
      case NEW_MESSAGE:
        newMessage(ws, dataBase, message);
        break;

      case ALL_MESSAGE:
        getMessages(ws, dataBase);
        break;

      case CHANGE_MESSAGE:
        changeMessage(ws, dataBase, message);
        break;

      default:
        ws.send(toJSON(dataBase));
    }
  });
};
