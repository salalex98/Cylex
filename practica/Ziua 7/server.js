var http = require('http');
var fs = require('fs');
var port = 8080;
var hostname = 'localhost'

//create a server object:
http.createServer(function (req, res) {
  	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
	res.end();
});
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
