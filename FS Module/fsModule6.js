const fs = require('fs')

// fs.open('./Text Files/test.txt', 'r', (err, fd) => {
//   console.log("Our file is opened for reading");
// })

//fs stat module
fs.stat('./Text Files/random.txt', (err, stats) => {
  if (err) {
    console.error(err)
  }
  console.log(stats.isFile()); //checking if it is file
  console.log(stats.isDirectory()); //checking if it is just only a directory other than the file
  console.log(stats.isSymbolicLink()); //checking if the file is a symbolic link 
  console.log(stats.size); //chcking the size of the file 

})