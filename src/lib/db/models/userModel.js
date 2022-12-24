// @ts-nocheck
import mongoose from "mongoose";

const Schema = mongoose.Schema

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;