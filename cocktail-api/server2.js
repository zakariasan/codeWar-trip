const http =require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');// for parsing and formatting URL query strings.
const url = require('url');

const figlet = require('figlet')//create ASCII Art from text.

const server = http.createServer((req, res)=> {
   

  const page = url.parse(req.url).pathname;//files we have or page that we want
  
  const params = querystring.parse(url.parse(req.url).query); //querys that we see
 
if(page ==='/api/users'){
    const users = [
        {name : "Bob smith", age : 34},
        {name : "zak Dev", age : 24},
        {name : "koni hear", age : 54},
        {name : "jack rolow ", age : 14},
    ];

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(users))
}

else if(page ==='/about'){
        fs.readFile(
            path.join(__dirname, './','otherpage.html'),
            (err, data)=>{
                if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});    
            res.end(data)
        })
    }
else if(page ==='/'){
        fs.readFile(
            'index.html',
            (err, data)=>{
                if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});    
    
            res.end(data)
        })
    }
 else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }


});

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=> console.log(`Server running on Port ${PORT} let s code`));
