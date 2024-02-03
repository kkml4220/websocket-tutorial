const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (message) => {
    console.log("message:", message);
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
