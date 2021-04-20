const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

const messages = [];

const emitMessages = () => io.emit("chatMessage", messages);

io.on("connection", client => {
  console.log("A user connected.");
  emitMessages(messages);
  client.on("chatMessage", message => {
    messages.push(message);
    emitMessages(messages);
  });
});

server.listen(PORT);
