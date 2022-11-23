const {connect} = require('./client.js')
const {setupInput} = require('./input.js')

console.log("Connecting ...");

setupInput(connect());
// setup interface to handle user input from stdin

