const express = require('express')
const app = express();

app.use(express.json());
app.use(require('./route'))


app.listen(8000,(req,res)=>{
    console.log("port is running")
})