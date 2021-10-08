const http = require("http");

const server = http.createServer((req, res) => {
  res.end("HELLO WORLD");
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});
