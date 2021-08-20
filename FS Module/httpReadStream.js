const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./randomImage.png');

    res.writeHead(200,{'content-type':'image/png'});
    readStream.pipe(res);
})
server.listen(3000);