const net = require("net");
const port = 50541;
const host = '165.227.47.243'
const conn = net.createConnection({
  host: host ,// IP address here,
  port: port,
});

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: host ,// IP address here,
    port: port,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connection established");
  });
  conn.on('data', (message) => {
    console.log("Server was all like: ",message)
  })
  return conn;
};

console.log("Connecting ...");
connect();