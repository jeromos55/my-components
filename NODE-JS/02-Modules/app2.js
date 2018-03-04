var http = require('http');



function myFunction() {
  console.log('Function was called');
}

var myString = 'String!';

http.createServer(function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(myString);
    myFunction();
    response.end();
}).listen(8000);

