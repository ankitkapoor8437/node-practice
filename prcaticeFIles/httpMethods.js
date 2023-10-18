const http = require('http');
const fs = require('fs');
const url = require("url");

function myHandler(req, res) {
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} Received\n`
    const myUrl = url.parse(req.url, true);
    
    console.log(myUrl);

    fs.appendFile('log.txt', log, (error, result) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Changes done!");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Server about ${username}`);
                break;
            default:
                res.end("404 Not found!");
                break;
        }
    });
    console.log();
};


const server = http.createServer(myHandler);

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
  