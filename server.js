const express = require("express");
const app = express();
const http = express("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
