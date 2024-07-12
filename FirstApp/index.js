const express = require('express');
const app = express();

app.use((req,res)=>{
    console.log("WE GOT A NEW REQUEST!!");
    res.send("HELLO I'M SEND ");
})

app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000");
})