const http = require('http');
const path = require('path');
const url = require('url');

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName==='/'|| pathName === '/overview'){
        res.write('This is the overview section');
        res.end()  
    }
    else if(pathName==='/product'){
        res.write('This is the prodcut section');
        res.end()
    }
    else{
        res.writeHead(404,{
            'content-type':'text/html',
            
        });
        res.write('<h1>Hello World!</h1>');
        res.end()
    }
    
});

server.listen(3000,()=>{
    console.log('Listening on the port 3000');
});