//Here we will be reading file from bigdata.txt and writing that particular file on bigdataOutput.js through streaming
const fs = require('fs');
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`); //reading from data
const ourWriteStream = fs.createWriteStream(`${__dirname}/bigdataOutput.txt`);

ourReadStream.on('data',(data)=>{
    ourWriteStream.write(data);   //we can also use  .toString() incase of using 'utf-8'
});

//we can do the same thing using '.pipe' method 
// ourReadStream.pipe(ourWriteStream);