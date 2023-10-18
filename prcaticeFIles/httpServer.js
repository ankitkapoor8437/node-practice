const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} Received\n`
    fs.appendFile('log.txt', log, (error, result) => {
        switch (req.url) {
            case "/":
                res.end("Server hello");
                break;
            case "/about":
                res.end("Server about");
                break;
            default:
                res.end("404 Not found!");
                break;
        }
    });
    console.log();
});

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
