import mongoose, { Schema, model } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isNgo: Boolean,
    address: String,
    phone: String,
    imageURL: String
  });

  //define user model
const User = mongoose.model('User', userSchema);
export default User;