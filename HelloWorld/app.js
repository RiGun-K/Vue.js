const express = require('express'); // express import 
const app = express(); // app 변수에 express 함수 호출 

//
app.get('/', (req, res)=>{
    res.send('Practice HomePage with express');
});

app.get('/hello', (req, res)=>{
    res.send('Hello with express');
});

module.exports=app;