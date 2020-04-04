var http = require('http')

var port = 80

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World, Springworks\n')
})

server.listen(port)

console.log('Server running at http://node.ggangireddy.com:' + port)
