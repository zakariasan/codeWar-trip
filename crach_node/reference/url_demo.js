const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(myUrl.href);


console.log(myUrl.hostname)

console.log(myUrl.search)
