// //this module is used to Read , write , edit and delete a particular  file system 
// //fs.appendfileSync works syncronously
// const fs = require('fs');
// fs.writeFileSync('myfile.txt','Hello Everyone'); // will create a new txt file and then write 'hello Everyone 'there
// //now again if we want to replace this text we can write the same command 
// fs.writeFileSync('myfile.txt','Hello Everyone this text is edited from the previous one'); // will create a new txt file and then write 'hello Everyone 'there
// //if we want to add something in this file we ca do the following 
// fs.appendFileSync('myfile.txt','this text is a new one'); // will create a new txt file and then write 'hello Everyone 'there
// //how to read the file 
// const data = fs.readFileSync('myfile.txt');
// console.log(data); //in this case we will get return a buffer  and it is a binary form a data 

// // if we want to have the original form of data  then
// console.log(data.toString());

//we can do the whole thing Asynchronously 

const fs = require('fs');
const data = fs.readFile('myfile.txt',(err,data)=>{
    console.log(data.toString());
});
console.log("Hi"); //Just to demonstrate that this thing works asynchronously


 
