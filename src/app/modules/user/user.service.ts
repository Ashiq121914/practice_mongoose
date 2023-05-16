import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB =async (payload:IUser):Promise<IUser> => {
    // creating a new user. when we create a new user, then we can use custom instance methods
    const user = await new User(payload); // User -> class user -> instance
    await user.save(); // built in instance methods
    
    console.log(user.fullName()); // custom instance method
    return user;
}

export const getUsersFromDB = async():Promise<IUser[]>=>{
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async(payload:string):Promise<IUser | null>=>{
    const user = await User.findOne({id:payload},{
        name:1,
        contactNo:1
    },);
    // here name:1, this is called field filtering, এইভাবে একটা একটা করে feild নেওয়া যায়।
    return user;
}



// export const getAllAdminUsers = async(payload:string): Promise<IUser | null> =>{
//     const user1 = new User();
//  }
 