import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  imageURL: String,
  rating: { type: Number, required: true },
});

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;
