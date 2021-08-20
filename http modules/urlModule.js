const http = require('http');
const URL = require('url');

const server = http.createServer((req,res)=>{
    
    const myURL = "https://www.youtube.com/watch?v=JWnpfkA6V2A" ;
    const myURLobj = URL.parse(myURL,true);
    const myHostName = myURLobj.host;
    const myPathName = myURLobj.pathname;
    const mySearchName = myURLobj.search;

    res.writeHead(200,{'content-Type': 'text/html'})
    // res.write(myHostName);
    res.write(  myPathName);
    // res.write(  mySearchName);
    res.end();
    

});
server.listen(5050); //listening server on port '3000' which is a local host 
