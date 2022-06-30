//call friends 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');// for parsing and formatting URL query strings.
const figlet = require('figlet')//create ASCII Art from text.

const server = http.createServer((req, res) => {

  const page = url.parse(req.url).pathname;//files we have or page that we want
  
  const params = querystring.parse(url.parse(req.url).query); //querys that we see
  
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
     // res.write(data);
      res.end(data);
    });
  }

  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'Zak_4r1A'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "zak",
          status: "Boss Man",
          currentOccupation: "Besat"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown haha ahaha",
          status: "unknown",
          currentOccupation: "unknown"
        }
    //figlet('unknown haha ahaha', function(err, data) {
      //if (err) {
          //console.log('Something went wrong...');
          //console.dir(err);
          //return;
      //}
      //res.write(data);
      //res.end();
    //});
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
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

server.listen(8000);
