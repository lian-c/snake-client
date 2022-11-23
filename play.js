const {connect} = require('./client.js')

console.log("Connecting ...");
connect();
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener
  return stdin;
};

const handleUserInput = function (key){

  if (key === '\u0003') {
    console.log("You wanna quit??")
    process.exit();
  }
}

setupInput();

// module.exports = {setupInput}