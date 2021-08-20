//Here we are reading data from a text file and writing it to another text file by compressing
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./BuffernStream/bigdata.txt','utf8');
const writeStream = fs.createWriteStream('./BuffernStream/bigdataOutput.txt.gz');
readStream.pipe(gzip).pipe(writeStream);