const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
    res.write('<html><head><title>Form</title></head></html>');
    res.write('<body><form method = "post" action = "/process"><input name = "message"></input> </form></body>')
    res.end();
    }
    else if(req.url =='/process' && req.method == 'POST') {
        req.on('data',(chunk)=>{
            console.log(chunk.toString());
        });
        res.write('Thank you for submitting');
            res.end();
        
    }
    else{
        res.write('Not found');
        res.end();
    }
}); 
//creating a server 
// server.on('connection',()=>{
//     console.log('New Connection..!')
// });
server.listen(3000); //listening server on port '3000' which is a local host 
console.log('listening on port 3000'); 