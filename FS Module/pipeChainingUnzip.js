//Here we are reading data from a zipped text file and writing it to another text file by unzipping
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./BuffernStream/bigdataOutput.txt.gz');
const writeStream = fs.createWriteStream('./BuffernStream/uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);