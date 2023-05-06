import { Schema, model } from 'mongoose';

const ngoSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  imageURL: { type: String },
  isVerified: { type: Boolean, default: false },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const NGO = model('NGO', ngoSchema);

export default NGO;
