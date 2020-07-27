const mongoose = require("mongoose");
const WebSocketServer = require("ws").Server;

const wsHandler = require("./wsHandler");

const PORT = process.env.PORT || 5000;
const ws = new WebSocketServer({ port: PORT });

mongoose.connect(
  "mongodb+srv://pavel:an0FVgm59Hm69TKu@chat.09mkn.mongodb.net/chat",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => {
    ws.on("connection", (socket) => {
      wsHandler(socket, ws.clients);
    });
  })
  .on("error", (err) => console.log("Connection error:", err));
