import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Tomato:tomato1324@cluster0.hrw8dep.mongodb.net/Tomato').then(() => console.log("DB connected"))
}