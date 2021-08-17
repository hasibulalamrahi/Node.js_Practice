const http = require('http');
const myServer = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/html'});  //we are setting up the status code here 
    res.write("hello");
    res.write("<h1>This is an HTML tag</h1>")
    res.end();
});
myServer.listen(3000);
console.log('listening on port 3000');