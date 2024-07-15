const express = require("express");
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs');

const comments = [
    {
        id:'no1',
        comment:'내가1빠'
    },
    {
        id:'no2',
        comment:"나는 2빠"
    },
    {
        id:'no3',
        comment:"333333333"
    }
]

app.get('/comment',(req,res)=>{
    //경로를 지정할때 앞에 /를 넣는 버릇이 있음
    //값을 전달할 땐 {}로 묶어서 전달해야 함.
    res.render("comment/index", {comments})
})

//URL앞에는 /를 붙어야 함.
app.get('/comment/new', (req,res) =>{
    res.render('comment/new');
})

app.post('/comment/new',(req,res) =>{
    const {id, comment} = req.body;
    console.log(id, comment);
    comments.push({id,comment});
    //redirect은 페이지 정보를 GET해서 오는 것이 아닌 보내주는 역할.
    res.redirect('/comment');
})

app.get('/tacos', (req,res) =>{
    res.send("GET!!!!!!!!");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post('/tacos',(req,res) =>{
    console.log(req.body)
    res.send("POST!!!!!!!!!!!!!!!!!!!!!");
})

app.listen(3000, ()=>{
    console.log("ON PORT 3000");
})