const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

io.on("connection", () => {
  console.log("A user connected.");
});

server.listen(PORT);
