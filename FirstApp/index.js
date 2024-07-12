const express = require('express');
const app = express();

// app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST!!");
//     res.send("HELLO I'M SEND ");
// })
app.get('/', (req,res) =>{
    res.send("HOme sdadasd");
})

//경로 매개변수 활용
app.get('/r/:subreddit' ,(req,res) =>{
    const {subreddit} = req.params
    console.log(req.params);
    res.send(`This is a ${subreddit}`);
});

app.get('/r/:subreddit/:id' ,(req,res) =>{
    const {subreddit,id} = req.params
    console.log(req.params);
    res.send(`This is a ${subreddit} id : ${id}`);
});

app.get('/cats',(req,res) =>{
    res.send("CAT REQUEST");
})

app.get('/dogs', (req,res) =>{
    res.send("Woof");
})
//search경로 뒤에 ?key=value형태로 값을 줄 수 있다
//또한 여러개를 주고 싶을 경우 ?key=value&key=value로
//&를 붙이면 된다.
app.get("/search" , (req,res) =>{
    console.log(req.query);
    const {q} = req.query;
    //KEY값인 q가 무조건 필요함.
    if(!q){
        res.send("Nothing")
    }
    res.send("Hi");
})

//지정한 경로 외에 값을 줄 경우 잘못된 페이지라고 알려주기 위해 사용
//맨 마지막에 지정해줘야함.
app.get('*', (req,res) =>{
    res.send("blok page");
})
app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000");
})