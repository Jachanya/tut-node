const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home page');
    }
    if(req.url === '/about'){
        res.end('Welcome to About page');
    }
    res.end(`<h1>Dont work <h1>`);
});

server.listen(5000);