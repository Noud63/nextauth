import mongoose from "mongoose";

const mongoDBConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
}

export default mongoDBConnect