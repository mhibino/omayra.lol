const http = require('http');

const server = http.createServer(function (req, res) {
  res.write("On the road to Fullstack!");
  res.end();
}).listen(3000);
console.log("Server listening on port 3000...");
