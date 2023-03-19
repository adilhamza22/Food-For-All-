import mongoose, { connect } from "mongoose"
import express, { Router } from "express"

import config from "config"
// const db = config.get('mongoURI');
const app =express();
// const username = "adilhamza2212";
// const password = "foodforall";
// const port = 3000;
app.use(express.json());    
async function connectDB () {
    mongoose.connect(
        "mongodb+srv://adilhamza2212:foodforall@cluster0.tpcxwbr.mongodb.net/?retryWrites=true&w=majority",
          {
          useNewUrlParser: true,
        //   useFindAndModify: false,
          useUnifiedTopology: true
        }
      );
      const db = mongoose.connection;
      db.on("error",console.error.bind(console,"connection error: "));
      db.once("open",()=>console.log("connected successfully"));
      
      
      
}
export{connectDB};

// async function connectDB  (){
//     try{
//         mongoose.set('strictQuery',true);
//         await mongoose.connect(db,{
//             useNewUrlParser:true,
//         });
//         console.log('MongoDB is connected. . .')
//     }catch(err){
//         console.error(err.message);
//         process.exit(1);
//     }
// };
// export{connectDB};

