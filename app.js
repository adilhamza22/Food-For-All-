//app.js
import express from 'express';
import {connectDB} from './config/db.js';
import { Router } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Restaurant from './client/src/models/restaurants.js';
import User from './client/src/models/users.js';
import NGO from './client/src/models/ngo.js';

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
// app.get('/',(req,res)=> res.send('Hello World. . .'));

const port = process.env.port || 8080;
app.use(Router);
connectDB();

// Configure local authentication strategy for User
passport.use('user-local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { message: 'Incorrect email or password' });
    if (user.password !== password) return done(null, false, { message: 'Incorrect email or password' });
    return done(null, user);
  });
}));

// Configure local authentication strategy for Restaurant
passport.use('restaurant-local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  Restaurant.findOne({ email }, (err, restaurant) => {
    if (err) return done(err);
    if (!restaurant) return done(null, false, { message: 'Incorrect email or password' });
    if (restaurant.password !== password) return done(null, false, { message: 'Incorrect email or password' });
    return done(null, restaurant);
  });
}));

// Configure local authentication strategy for NGO
passport.use('ngo-local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  NGO.findOne({ email }, (err, ngo) => {
    if (err) return done(err);
    if (!ngo) return done(null, false, { message: 'Incorrect email or password' });
    if (ngo.password !== password) return done(null, false, { message: 'Incorrect email or password' });
    return done(null, ngo);
  });
}));

// Serialize user object
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user object
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.send(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving restaurants from database');
  }
});
app.get('/donors', async (req, res) => {
  // Find all donors in the database
  const users= await User.find({}, (err, donors) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(donors);
    }
  });
});

app.listen(port,()=>console.log(`Server is logged at port${port}`));

export default app;
