// Importando http
const http = require('http');
const app = require('./app');

const hostname = '0.0.0.0';
const port = 3000;

/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Maradona!!! \n');
});*/

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Sucesso! Server rodando em http://${hostname}:${port}`)
});