import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import mongoDBConnect from "../../utils/mongoDBConnect";

export async function POST(req){
try {
    const body = await req.json()
    const userData = body.formData
    console.log(userData)

    await mongoDBConnect()
   
    //Confirm data exist
    if(!userData?.email || !userData.password){
        return NextResponse.json({ message: "All fields are required!"}, { status: 400 }); 
    }

    //Check for duplicate emails
    const duplicate = await User.findOne({email: userData.email}).lean().exec()
    if(duplicate){
         return NextResponse.json(
           { message: "Duplicate email!", error },
           { status: 409 }
         ); 
    }

    const hashPassword = await bcrypt.hash(userData.password, 10)
    userData.password = hashPassword

    await User.create(userData)
    return NextResponse.json({ message: "User Created"}, { status: 200 });
    
} catch (error) {
    console.log(error)
    return NextResponse.json({message: "Error", error},{status: 500})
}
}