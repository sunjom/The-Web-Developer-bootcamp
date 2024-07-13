const express = require('express');
const app = express();
const path = require('path');

//view engine은 서버에서 js로 만든 변수를 보내줘서 클라이언트에서 활용할 수 있도록 해주는 엔진.
app.set('view engine','ejs');

//__은 자바스크립트에서 기본적으로 정의된 변수에 붙음.
//__dirname은 소스파일을 포함하는 절대경로로 나타냄.
//views폴더 안에 값을 가져오는것이 기본값이기 때문에
//app.set('views',경로) => 이런식으로 지정이 가능하다
app.set('views', path.join(__dirname, '/views'))
app.get('/rand', (req,res) =>{
    const num = Math.floor(Math.random() * 10) +1;
    //key:value값으로 매개값을 줄 수 있음.
    res.render('random', {rand: num})
})

app.get('/r/:raddit', (req,res) =>{
    const {raddit} = req.params;
    res.render('radditSite',{raddit:raddit});
})

app.get('/',(req, res) =>{
    res.send('homePage');
})

app.listen(3000, ()=>{
    console.log("PORT 3000")
})

