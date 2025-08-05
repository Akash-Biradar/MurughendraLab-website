import mongoose from "mongoose";

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '');
        console.log('db connected successfully');
    } catch (error) {
        console.log(error.message);
        exit(1);
        
    }
}
export default dbconnection;