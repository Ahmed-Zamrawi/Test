import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true,lowercase:true },
  password: { type: String, required: true },
}, { timestamps: true });

const userModel = model("User", userSchema);

export default userModel;