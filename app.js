// console.log('Welcome to Node Tutorial')
const http =require('http');
const server = http.createServer((req,res)=>{
 if(req.url === "/"){
    res.end('Welcome to Node Tutorial');
 }else if (req.url === "/about"){
    res.end('Welcome to about page')
 }else{
    res.end(`<h1> sorry not applicable</h1>
            <a href= "/"> Go back</a>`)

 }
})

server.listen(5000)
