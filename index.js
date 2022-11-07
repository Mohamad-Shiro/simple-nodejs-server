const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        var filePath = path.join(__dirname, "public", "index.html");
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
        if (err) {
            if (err.code == "ENOENT") {
              // Page not found
              fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(content, "utf8");
                });
            } else {
              //  Some server error
              res.writeHead(500);
              res.end(`Server Error: ${err.code}`);
            }
          } else {
            // Success
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
          }
    });

    
});

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});