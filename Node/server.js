const http = require('http');
const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello RiGun With Node.js');
    if(request.url=='/hello'){
        response.end('Hello 폴더로 오면 실행');
    }if (request.url=='/Home') {
        response.end('Home 폴더로 오면 실행');
    }
});
server.listen(3000);