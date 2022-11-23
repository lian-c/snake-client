const {connect} = require('./client.js')
const {setupInput, handleUserInput} = require('./input.js')

console.log("Connecting ...");
connect();
setupInput();
// setup interface to handle user input from stdin

