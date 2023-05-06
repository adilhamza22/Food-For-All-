//app.js
import express from 'express';
import {connectDB} from './config/db.js';
import { Router } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());


app.get('/',(req,res)=> res.send('Hello World. . .'));
const port = process.env.port || 8080;
app.use(Router);
connectDB();

//User schema
const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true,length:8},

});
//define user model
const User = mongoose.model('User', userSchema);

// Handle user signup
app.post('http://localhost:8080/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const user = new User({ email, password });
      await user.save();
      res.status(201).json({ message: 'User created' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
});

// Handle user login
app.post('http://localhost:8080/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
app.listen(port,()=>console.log(`Server is logged at port${port}`));
