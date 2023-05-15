// here all the server related code
import app from './app';
import mongoose  from 'mongoose'
const port:number = 5000



// database connection
async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
  
    console.log(`database connection successfull`);
    app.listen(port, () => {
        console.log(`server is listening ${port}`)
      })
    }catch(err){
        console.log(`failed to connect database`,err);
    }
  }
bootstrap();


