//run ladıktan sonra http://localhost:5000/ addresinde
const http = require('http');

const server = http.createServer((req,res)=>{
console.log(req);
if (req.url === '/') {
    res.end("welcome home page")
}
if (req.url === '/about') {
    res.end('histroy')
}
res.end(`
    <h1>Opps!</h1>
    <p>we cant show it </p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)