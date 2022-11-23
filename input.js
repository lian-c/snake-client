const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener
  return stdin;
};

const handleUserInput = function (key){ //coding the keys to input

  if (key === '\u0003') {
    console.log("You wanna quit??")
    process.exit();
  }
}


module.exports = {setupInput, handleUserInput}