const express = require('express');
const app = express();
const newsRouter = require('./routes/news');
const cors = require('cors');

//corss 오류를 해결하기 위한 미들웨어 실행
//데이터를 주고받을 때 json형식으로 주고 받겠다!
app.use(express.json())
//body-parser 미들웨어 대체하는 express 내장모듈
app.use(express.urlencoded({extended:true}));


app.set('port',process.env.PORT || 3001);



app.use('/news',newsRouter)
app.listen(app.get('port'),(req,res)=>{
  console.log('port waiting...💕✈️')
})