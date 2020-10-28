const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.end("<h1>Hello </h1>");
});

myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});