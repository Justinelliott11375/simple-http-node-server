const fs = require('fs');
const http = require('http');
const port = 3000;

fs.writeFileSync('hello-world.txt', 'Hello to this great world', (err) => {
    if (err) 
        throw err;
});

const server = http.createServer((request, response) => {
    response.end();
});

server.listen(port, () => {
    console.log('server is listening on ${port}');
});