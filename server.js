const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send('Api is working')
})

app.listen(5000,()=>{
    console.log('Server is running on port 3000')
})