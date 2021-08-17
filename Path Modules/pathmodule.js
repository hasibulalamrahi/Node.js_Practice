//Here we will be using  Path module
//this module is a core module of JS

// const { copyFileSync } = require('fs');
// const { delimiter } = require('path');
const path = require('path'); 

const myPath = '/home/bs584/Node JS/module1.js';
console.log(path.basename(myPath)); //will show us the basename of the path 
console.log(path.dirname(myPath)); ///will give us the directory name as the output 
console.log(path.extname(myPath)); //will give us the extension name as .js
console.log(path.isAbsolute(myPath)); //will return true if our path is absolute
console.log(path.parse(myPath)); //will give us the input as an object 


