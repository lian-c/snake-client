const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' ,// IP address here,
    port: 50541,
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

module.exports = {connect};
