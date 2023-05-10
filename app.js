// // //app.js
// // import express from 'express';
// // import db from './config/db.js';
// // import { ObjectId } from 'mongodb';
// // import { Router } from 'express';
// // import bodyParser from 'body-parser';
// // import mongoose from 'mongoose';
// // import passport from 'passport';
// // import { Strategy as LocalStrategy } from 'passport-local';
// // import Restaurant from './client/src/models/restaurants.js';
// // import User from './client/src/models/users.js';
// // import NGO from './client/src/models/ngo.js';
// // import session from 'express-session'
// // import { Db } from 'mongodb';
// // const app = express();
// // app.use(bodyParser.json());

// // // app.use(session({
// // //   secret: 'your-secret-key',
// // //   resave: false,
// // //   saveUninitialized: false
// // // }));

// // // app.use(passport.initialize());
// // // app.use(passport.session());

// // const port = process.env.port || 8080;
// // app.use(Router);
// // // // connectDB();

// // // // Configure local authentication strategy for User
// // // passport.use('user-local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
// // //   User.findOne({ email }, (err, user) => {
// // //     if (err) return done(err);
// // //     if (!user) return done(null, false, { message: 'Incorrect email or password' });
// // //     if (user.password !== password) return done(null, false, { message: 'Incorrect email or password' });
// // //     return done(null, user);
// // //   });
// // // }));

// // // // Configure local authentication strategy for Restaurant
// // // passport.use('restaurant-local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
// // //   Restaurant.findOne({ email }, (err, restaurant) => {
// // //     if (err) return done(err);
// // //     if (!restaurant) return done(null, false, { message: 'Incorrect email or password' });
// // //     if (restaurant.password !== password) return done(null, false, { message: 'Incorrect email or password' });
// // //     return done(null, restaurant);
// // //   });
// // // }));

// // // // Configure local authentication strategy for NGO
// // // passport.use('ngo-local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
// // //   NGO.findOne({ email }, (err, ngo) => {
// // //     if (err) return done(err);
// // //     if (!ngo) return done(null, false, { message: 'Incorrect email or password' });
// // //     if (ngo.password !== password) return done(null, false, { message: 'Incorrect email or password' });
// // //     return done(null, ngo);
// // //   });
// // // }));

// // // // Serialize user object
// // // passport.serializeUser((user, done) => {
// // //   done(null, user.id);
// // // });

// // // // Deserialize user object
// // // passport.deserializeUser((id, done) => {
// // //   User.findById(id, (err, user) => {
// // //     done(err, user);
// // //   });
// // // });

// // app.get('/',(req,res)=> res.send('Hello World. . .'));

// // app.get('/restaurants', async (req, res) => {
// //   try {
// //     // let collection =  db.collection('restaurants');
// //     // let results= await collection.find({}).toArray();
// //     const restaurants = await Restaurant.find({});
// //     // res.send(results).status(200);
// //     res.json(restaurants);
// //     // res.send({results});
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({message:err.message});
// //   }
// // });
// // app.get('/donors', async (req, res) => {
// //   // Find all donors in the database
// //  try{ 
// //   let collection = await db.collection('users');
// //   let results = await collection.find({}).toArray();
// //   // res.send(results).status(200); 
// //   res.json(results);
// //  }
// //   catch(err) {console.error(err);
// //     res.status(500).send('Error retrieving restaurants from database');
// //   }
  
    
// //   });

// // app.get('/ngos', async (req, res) => {
// //   // Find all donors in the database
  
// //   const ngos= await NGO.find({}, (err, ngos) => {
// //     if (err) {
// //       console.error(err);
// //       res.status(500).json({ error: 'Internal server error' });
// //     } else {
// //       res.json(ngos);
// //     }
// //   });
// // });

// // app.listen(port,()=>console.log(`Server is logged at port${port}`));

// // export default app;
import express from 'express';
// import db from './config/db.js';
import { ObjectId } from 'mongodb';
import { Router } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Restaurant from './client/src/models/restaurants.js';
import User from './client/src/models/users.js';
import NGO from './client/src/models/ngo.js';
import { MongoClient } from "mongodb";


//connect db

const connectionString = "mongodb+srv://adilhamza:adilhamza2212@cluster0.kpbfuze.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);
const app = express();
app.use(bodyParser.json());

const port = process.env.port || 8080;
app.use(Router);

let conn,db;
try {
  conn = await client.connect();
  db = conn.db("SE");
  console.log("Connected to DB: "+ db.databaseName);
  
  app.get('/', (req, res) => res.send('Hello World. . .'));
  let users = db.collection("users");
  app.get('/donors', async (req, res) => {
    try {
      const users = await users.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  });

  // console.log(db.collection("users").find());

} catch(e) {
  console.error(e);
}











app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.get('/donors', async (req, res) => {
  try {
    conn.db
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.get('/ngos', async (req, res) => {
  try {
    const ngos = await NGO.find({});
    res.json(ngos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => console.log(`Server is logged at port ${port}`));

export default app;


// import express from 'express';
// // import db from './config/db.js';
// import { ObjectId } from 'mongodb';
// import { Router } from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import Restaurant from './client/src/models/restaurants.js';
// import User from './client/src/models/users.js';
// import NGO from './client/src/models/ngo.js';
// import { MongoClient } from "mongodb";

// //connect db
// const connectionString = "mongodb+srv://adilhamza:adilhamza2212@cluster0.kpbfuze.mongodb.net/?retryWrites=true&w=majority";
// const app = express();
// app.use(bodyParser.json());
// const port = process.env.port || 8080;
// app.use(Router);

// const client = new MongoClient(connectionString);

// client.connect((err, client) => {
//   if (err) {
//     console.error(err);
//   } else {
//     const db = client.db("SE");
   
//     app.get('/',(req,res)=> res.send('Hello World. . .'));
    
//     // app.get('/restaurants', async (req, res) => {
//     //   try {
//     //     const restaurants = await Restaurant.find({});
//     //     res.json(restaurants);
//     //   } catch (err) {
//     //     console.error(err);
//     //     res.status(500).json({message:err.message});
//     //   }
//     // });
    
//     app.get('/donors', async (req, res) => {
//       try{ 
//         const collection = db.collection('users');
//         const results = await collection.find({}).toArray();
//         res.json(results);
//       } catch(err) {
//         console.error(err);
//         res.status(500).send('Error retrieving donors from database');
//       }
//     });
    
//     // app.get('/ngos', async (req, res) => {
//     //   const ngos = await NGO.find({}, (err, ngos) => {
//     //     if (err) {
//     //       console.error(err);
//     //       res.status(500).json({ error: 'Internal server error' });
//     //     } else {
//     //       res.json(ngos);
//     //     }
//     //   });
//     // });
    
//     app.listen(port,()=>console.log(`Server is logged at port${port}`));
//   }
// });

// export default app;
