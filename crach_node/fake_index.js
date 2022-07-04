const http =require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=> {
   

if(req.url ==='/api/users'){
    const users = [
        {name : "Bob smith", age : 34},
        {name : "zak Dev", age : 24},
        {name : "koni hear", age : 54},
        {name : "jack rolow ", age : 14},
    ];

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(users))
}

if(req.url ==='/about'){
        fs.readFile(
            path.join(__dirname, './','about.html'),
            (err, data)=>{
                if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});    
            res.end(data)
        })
    }



    if(req.url ==='/cocktail'){
        fs.readFile(
            path.join(__dirname, 'cocktail-api','index.html'),
            (err, data)=>{
                if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});    
    
            res.end(data)
        })
    }

});

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=> console.log(`Server running on Port ${PORT} let s code`));
