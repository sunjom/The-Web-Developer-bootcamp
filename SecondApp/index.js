const express = require('express');
const app = express();
const path = require('path');
const datas = require('./data.json');

//static안에 절대경로를 추가해 어디에서 실행해도 같은 결과를 보여줌.
app.use(express.static(path.join(__dirname, '/public')));

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
    const data = datas[raddit];
    if(data){
        //data안에 있는 값을 전달해주기 위해 값들을 풀어서 줌
        res.render('radditSite',{...data});
    }else{
        res.render('errorPage',{raddit:raddit});
    }
})

app.get('/cats', (req,res) =>{
    const names = ['Blue', 'Rocket', 'Monty', 'Winston']

    res.render('cats',{names});
})


app.get('/',(req, res) =>{
    res.render('home');
})

app.listen(3000, ()=>{
    console.log("PORT 3000")
})

