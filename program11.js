var http = require('http');
var fs = require('fs');

var server = http.createServer(callback);
var port = process.argv[2];
var path = process.argv[3];

function callback(request, response){	
	let src = fs.createReadStream(path);
	src.pipe(response);
}

server.listen(port);