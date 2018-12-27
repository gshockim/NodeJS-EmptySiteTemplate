var http = require('http');


http.createServer(function (req, res) {
    
    res.writeHead( 503, { 'Content-Type': 'application/json' });
    res.end('{Result:503}');
    
}).listen(process.env.PORT || 8080);