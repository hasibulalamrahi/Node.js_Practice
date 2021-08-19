const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('Hello form the server');
});

server.listen(3000,()=>{
    console.log('Listening on the port 3000');
});