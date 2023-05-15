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
    gender:"male" | "fimale";
    email?:string;
    contactNo:string;
    emergencyContactNo:string;
    presestAddress:string;
    permanentAddress:string;
   }