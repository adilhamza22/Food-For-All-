//app.js
import express from 'express';
import {connectDB} from './config/db.js';
import { Router } from 'express';
const app = express();


app.get('/',(req,res)=> res.send('Hello World. . .'));
const port = process.env.port || 8080;
app.use(Router);
app.listen(port,()=>console.log(`Server is logged at port${port}`))
// app.listen(port,(req,res)=>console.log(`Server running on port: ${port}`))
connectDB();