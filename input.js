let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener
  return stdin;
};

const handleUserInput = function (key){ //coding the keys to input
  if (key === 'w'){
    connection.write("Move: up")
  }
  if (key === 'a'){
    connection.write("Move: left")
  }
  if (key === 's'){
    connection.write("Move: down")
  }
  if (key === 'd'){
    connection.write("Move: right")
  }
  if (key === '3'){
    connection.write("Say: OMNOMNOM")
  }
  if (key === '2'){
    connection.write("Say: meh I'm full anyways")
  }
  if (key === 'e'){
    connection.write("Say: lemme rest ")
  }
  if (key === '\u0003') { //exits game with ctrl-c
    process.stdout.write("You wanna quit??")
    process.exit();
  }
}


module.exports = {setupInput}