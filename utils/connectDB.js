import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        const MONGODB_URI = "mongodb+srv://shaikhmuskan1024:muskan@cluster0.lpvvshc.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser :true ,
            useUnifiedTopology :true,
        });
        console.log('Database connected successfully');
    }
    catch(error){
        console.error('Failed to connect to MongoDB ',error);
        return;
    }
};
export default connectDB;