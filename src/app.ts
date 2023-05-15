// here all the app used code
import express, { Application,Request,Response,NextFunction } from 'express';
import cors from 'cors';
import { Schema,model } from 'mongoose';
const app:Application = express()

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req:Request, res:Response,next:NextFunction) => {

    //inserting a test data into mongodb
    /* 
        step1: Interface
        step2: schema
        step3: Model
        Step4:Database Query
    */ 
   // 1. creating an interface representing a document in MongoDB.
   interface IUser{
    id:string;
    role:"student";
    password:string;
    name:{
        firstName:string;
        middleName?:string;
        lastName:string;
    };
    dateOfBirth?:string;
    gender:"male" | "fimale";
    email?:string;
    contactNo:string;
    emergencyContactNo:string;
    presestAddress:string;
    permanentAddress:string;
   }
    //    2. Create a Schema corresponding to the document interface.
    const userSchema = new Schema<IUser>({
        id:{
            type:String,
            required:true,
            unique:true
        },
        role:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        name: {
            firstName:{
                type:String,
                required:true
            },
            middleName:{
                type:String
            },
            lastName:{
                type:String,
                required:true
            }
         },
         dateOfBirth:{
            type:String,
         },
         gender:{
             type:String,
             enum:["male",'female']
         },
         email:{
            type:String,
         },
         contactNo:{
            type:String,
         },
         emergencyContactNo:{type:String},
         presestAddress:{
            type:String,
         },
         permanentAddress:{
            type:String,
         }
        
      });

});


export default app;