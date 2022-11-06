const http = require('http');
const path = require('path');
const fs = require('fs');
const { Console } = require('console');

const server = http.createServer((req, res) => {
    res.end('<h1>Hello</h1>');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});