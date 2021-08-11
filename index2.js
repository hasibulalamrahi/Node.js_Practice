// Global Object and Modular system of node.js

//window object is not available in Node js beacuase it does not runs on the browser but runs in a server

// console.log(window); //it will output because window object is not available in browser 

// setTimeout function is available in Node.js
// an object equivalent to window of JS is availble in Node.js which is known as global

// console.log(global); //this shows the availble built in functions in node.js

// console.log(__dirname); //will give us the path name/path directory
// console.log(__filename); // will give us the file name along with the path directory

//We want to import some property from the people.js file to this file 
//we will also be having some idea about the method require

const technology = require('./people');
console.log(technology.tech);
console.log(technology.a);
technology.random()

//In a similar way we can install lodash 

const _ = require('lodash');
console.log(_.last(technology.tech))