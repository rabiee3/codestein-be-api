const express = require('express');

const app = express();

const PORT = 5000;

//root route
app.get('/',(req,res)=>{res.send('API Running')})

app.listen(PORT, ()=> console.log(`Node server for API started on port: ${PORT}`))