// simple hello world express code and database connection
const express = require('express')
const mongoose = require("mongoose");


const app = express()
const port = 5000


// database connection
async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
 
    console.log(`database connection successfull`);
    }catch(err){
        console.log(`failed to connect database`,err);
    }
  }
bootstrap();


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`server is listening ${port}`)
})
