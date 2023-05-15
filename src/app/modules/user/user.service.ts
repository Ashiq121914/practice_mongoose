import User from "./user.model";

export const createUserToDB =async () => {
    const user = await new User(
        {
            id:1115,
            role:"student",
            name:{
                firstName:"gazi",
                middleName:"ashiq",
                lastName:"reza",
            },
            password:"amipassjani",
            gender:"male",
            contactNo:"3434353",
            emergencyContactNo:"3534534",
            presestAddress:"dhka",
            permanentAddress:"khlna",
           }
    );
    await user.save();
    return user;
}
