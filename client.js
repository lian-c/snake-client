const net = require("net");
const { IP, PORT } = require("./constants.js");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP ,
    port: PORT,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server🎉");
    conn.write("Name: NaN")
  });
  
  
  
  conn.on('data', (message) => {
    console.log("Server was all like: ",message)
  })
  return conn;
};

module.exports = {connect};


//within the conn.on("connect") area
// setTimeout(() => {  moved after established 1 second
//  conn.write("Move: up");
// }, 1000);
// console.log("moved up")
// setInterval(() => { . //moves every 500 ms down
//   conn.write("Move: down")
// },500 )