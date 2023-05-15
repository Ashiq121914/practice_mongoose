// here all the app used code
import express, { Application,Request,Response,NextFunction } from 'express';
import cors from 'cors';
const app:Application = express()

// using cors
app.use(cors());

app.get('/', (req:Request, res:Response,next:NextFunction) => {
    res.send('Hello World!')
});


export default app;