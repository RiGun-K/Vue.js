const http = require('http')
// http 는 객체임 , Node로 작업시 대부분 require 
// export는 하나하나 외부로 나가는 public 느낌

const server = http.createServer((req, res)=> {
    res.end('Hello World')
})
// http에 해당하는 createServer 호출  (=>  = 람다식) 
// res = 응답 , req = 요청 

server.listen(3000)
// listen = 서버를 켜라 
