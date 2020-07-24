const WebSocketServer = require("ws").Server;

const wsHandler = require("./wsHandler");

const PORT = process.env.PORT || 5000;
const ws = new WebSocketServer({ port: PORT });

ws.on("connection", (socket, req) => {
  wsHandler(socket, req);
});
