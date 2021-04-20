const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

io.on("connection", client => {
  console.log("A user connected.");
  client.on("chatMessage", message => {
    console.log(message);
  });
});

server.listen(PORT);
