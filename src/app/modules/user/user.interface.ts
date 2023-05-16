import { HydratedDocument, Model } from "mongoose";



// 1. creating an interface representing a document in MongoDB.
export interface IUser{
    id:string;
    role:"student";
    password:string;
    name:{
        firstName:string;
        middleName?:string;
        lastName:string;
    };
    dateOfBirth?:string;
    gender:"male" | "female";
    email?:string;
    contactNo:string;
    emergencyContactNo:string;
    presestAddress:string;
    permanentAddress:string;
   }


// instance methods
export interface IUserMethods {
    fullName(): string;
  }

//static
// যেহেতু methods and statics এর জন্য তাই interface use হবে।
 export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }