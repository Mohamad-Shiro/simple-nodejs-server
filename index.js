const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        var filePath = path.join(__dirname, "public", "server-page.html");
    } else if (req.url === "/Template-1" || req.url === "/Template-1/") {
        var filePath = path.join(__dirname, "public", req.url, "index.html");
    } else {
        var filePath = path.join(__dirname, "public", req.url);
    }

    let fileExtention = path.extname(filePath);
    let contentType = "";

    switch (fileExtention) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        default:
            contentType = "text/html";
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) throw err;
        res.writeHead(200, `Contet-Type: ${contentType}`);
        res.end(content);
    });

    
});

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});