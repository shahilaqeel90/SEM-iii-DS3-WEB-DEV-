const http =require('http');
const PORT = 3001;
const server = http.createServer((req,res)=>{
    console.log(`Request received: ${req.method} ${req.url}`);


res.statusCode = 200;
res.setHeader('content-Type','text/plan');
res.setHeader('X-powered-By','Node.js');


res.end('HELLO WROLD');
})

server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});