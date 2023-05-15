// here all the app used code
import express, { Application } from 'express';
import cors from 'cors';
const app:Application = express()

// application route
import userRoutes from './app/modules/user/user.route';

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/api/v1/user',userRoutes);
app.use('/api/v1/user',userRoutes);


export default app;


/*
    Interface > interface.ts
    Schema, Model > model.ts

    route
    route function > controller.ts

    Database Query > service


*/ 