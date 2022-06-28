const http =require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=> {
   
    let filePath = path.join(
    __dirname, 
    '../cocktail-api',
    req.url === '/'? 'index.html': req.url 
    );
    console.log(filePath);
    res.end();

});

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=> console.log(`Server running on Port ${PORT} let s code`));
