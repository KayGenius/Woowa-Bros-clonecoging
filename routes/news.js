const express = require('express');
const router = express.Router();
const axios = require('axios')
const id = 'cx19axToQKgHxLRoRdEk'
const pw = 'f0YR0jIaHp'

router.post('/search',(req,res)=>{
        console.log('이거뭐냐',req.body.input)
        let api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURI(req.body.input)}&display=10&start=1&sort=sim`
        let options = {
            method:'get',
            url: api_url,
            headers: {'Content-Type' : 'application/json','X-Naver-Client-Id':id, 'X-Naver-Client-Secret': pw}
         }
    axios(options).then((result)=>{res.json(result.data.items);console.log(result.data.items)}).catch((err)=>res.send('통신오류'))
        })
        
module.exports = router;