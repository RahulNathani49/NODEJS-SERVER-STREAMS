var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plane' });
    var myReadstream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
    // WRITING ON SERVER
    myReadstream.pipe(res);
    console.log("Requested Url : ", req.url);

});
var rdstr = fs.createReadStream(__dirname + "/read.txt", 'utf8');
var wrstr = fs.createWriteStream(__dirname + "/Writeme.txt", 'utf8');
rdstr.on('data', function(chunk) {
    // WRITING ON DIRECTORY FILE
    wrstr.write(chunk);
})

server.listen(3000, '127.0.0.1');
console.log('Listening to Port 3000 !!');